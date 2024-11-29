import { Card, Typography } from '@mui/material'
import React, { useState, CSSProperties } from 'react'
import DialogInfluencers from './DialogInfluencers'
import UseQueryHooks from 'src/lib/react-query'
import api from 'src/lib/api'
import Error500 from 'src/pages/500'
import Loading from 'src/components/Loading'
import { useQueryClient } from 'react-query'
import DeleteProjet from './DeleteProjet'
import DeleteStatusProjet from './DeleteStatusProjet'
import AddNewStatusProjet from './AddNewStatusProjet'
import EditStatusProjet from './EditStatusProjet'

// type Column = {
//   id: string
//   name: string
//   influencers: Influencer[]
// }

const styles = {
  container: {
    padding: '16px'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '24px'
  },
  boardContainer: {
    display: 'flex',
    gap: '16px',
    minHeight: '600px',
    width: '100%',
    padding: '20px 10px'
  },
  column: {
    flex: '1',
    minWidth: '300px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  },
  columnHeader: {
    padding: '16px',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  columnTitle: {
    fontSize: '14px',
    fontWeight: '600'
  },
  buttonGroup: {
    display: 'flex',
    gap: '4px'
  },
  iconButton: {
    padding: '4px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  } as CSSProperties,
  columnContent: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  } as CSSProperties,
  task: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
    cursor: 'move',
    transition: 'box-shadow 0.2s ease'
  },
  taskTitle: {
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '4px'
  },
  taskDescription: {
    fontSize: '12px',
    color: '#6b7280'
  }
}

const KanbanBoard = ({ id }: { id: string }) => {
  // const [columns, setColumns] = useState<Column[]>([])
  const [draggedTask, setDraggedTask] = useState<Influencer | null>(null)
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null)
  const queryClient = useQueryClient()

  const { error, isLoading, data } = UseQueryHooks<Project>(
    [`/projects/${id}`],
    async () => {
      const response = await api.get<Project>(`/projects/${id}`)

      return response.data
    },
    { enabled: !!id }
  )
  if (error) return <Error500 />

  const handleDragStart = (task: Influencer, columnId: string) => {
    setDraggedTask(task)
    setDraggedColumn(columnId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = async (columnId: string) => {
    try {
      await api.put(
        `/projects/${data?.id}/statut-projets/${draggedColumn}/influencers/${draggedTask?.id}/move/${columnId}`
      )
      queryClient.invalidateQueries({ queryKey: [`/projects/${id}`] })
    } catch (error) {
      console.log(error)
    }
  }

  const getTaskStyle = (isDragging: boolean): CSSProperties => ({
    ...(styles.task as CSSProperties),
    boxShadow: isDragging ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 1px 2px rgba(0, 0, 0, 0.05)'
  })

  const handleAddInfluencers = async (activeColumn: string, influencer: Influencer) => {
    console.log(influencer.id)
    try {
      const res = await api.post(`/projects-statut-projets-influencers/${activeColumn}`, {
        influencers: [influencer.id]
      })

      console.log(influencer.id)
      console.log(res)

      queryClient.invalidateQueries({ queryKey: [`/projects/${id}`] })
    } catch (error) {
      console.log(error)
    }

    // if (activeColumn && influencer.fullName) {
    //   setColumns(
    //     columns.map(column => {
    //       if (column.id === activeColumn) {
    //         return {
    //           ...column,
    //           influencers: [...column.influencers, influencer]
    //         }
    //       }

    //       return column
    //     })
    //   )
    // }
  }

  return (
    <>
      {data && (
        <div style={styles.container}>
          <div
            style={{
              padding: '20px 10px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Typography variant='h5'>{data?.name}</Typography>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <AddNewStatusProjet id={data?.id} />
              <DeleteProjet id={data?.id} />
            </div>
          </div>

          {isLoading && (
            <>
              <Loading />
            </>
          )}
          <div className='overflowX' style={styles.boardContainer}>
            {data &&
              data.statutProjets.length > 0 &&
              data.statutProjets.map(column => (
                <Card
                  key={column.id}
                  style={styles.column}
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(column.id)}
                >
                  <div style={styles.columnHeader}>
                    <div style={styles.columnTitle}>
                      {column.name} ({column.influencers.length})
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <DeleteStatusProjet id={column.id} projectId={data.id} />
                      <EditStatusProjet id={column.id} name={column.name} projectId={data.id} />
                    </div>
                  </div>
                  <div style={styles.columnContent}>
                    {column.influencers.map(influencer => (
                      <Card
                        key={influencer._id}
                        draggable
                        onDragStart={() => handleDragStart(influencer, column.id)}
                        style={getTaskStyle(draggedTask?._id === influencer._id)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <img
                            src={influencer.pictureUrl}
                            alt={influencer.fullName}
                            width={55}
                            height={55}
                            style={{ borderRadius: '50%' }}
                          />
                          <div>
                            <div style={styles.taskTitle}>{influencer.fullName}</div>
                            <div style={styles.taskDescription}>{influencer.nicheName}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <DialogInfluencers
                    handleChange={influencer => {
                      handleAddInfluencers(column.id, influencer)
                    }}
                  />
                </Card>
              ))}
          </div>
        </div>
      )}
    </>
  )
}

export default KanbanBoard
