import { Typography } from '@mui/material'
import React, { useState, CSSProperties } from 'react'
import Icon from 'src/@core/components/icon'
import DialogInfluencers from './DialogInfluencers'

type Column = {
  id: string
  title: string
  influencers: Influencer[]
}

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
    backgroundColor: '#f9fafb',
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
    backgroundColor: 'white',
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

const KanbanBoard = () => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: '1',
      title: 'Potential',
      influencers: []
    },
    {
      id: '2',
      title: 'Outreached',
      influencers: []
    },
    {
      id: '3',
      title: 'Negotiating',
      influencers: []
    },
    {
      id: '4',
      title: 'Active',
      influencers: []
    },
    {
      id: '5',
      title: 'Finished',
      influencers: []
    }
  ])

  const [draggedTask, setDraggedTask] = useState<Influencer | null>(null)
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null)

  const handleDragStart = (task: Influencer, columnId: string) => {
    setDraggedTask(task)
    setDraggedColumn(columnId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (columnId: string) => {
    if (draggedTask && draggedColumn) {
      const updatedColumns = columns.map(column => {
        if (column.id === draggedColumn) {
          return {
            ...column,
            influencers: column.influencers.filter(task => task._id !== draggedTask._id)
          }
        }
        if (column.id === columnId) {
          return {
            ...column,
            influencers: [...column.influencers, draggedTask]
          }
        }

        return column
      })

      setColumns(updatedColumns)
      setDraggedTask(null)
      setDraggedColumn(null)
    }
  }

  const getTaskStyle = (isDragging: boolean): CSSProperties => ({
    ...(styles.task as CSSProperties),
    boxShadow: isDragging ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 1px 2px rgba(0, 0, 0, 0.05)'
  })

  const handleAddInfluencers = (activeColumn: string, influencer: Influencer) => {
    if (activeColumn && influencer.fullName) {
      setColumns(
        columns.map(column => {
          if (column.id === activeColumn) {
            return {
              ...column,
              influencers: [...column.influencers, influencer]
            }
          }

          return column
        })
      )
    }
  }

  return (
    <div style={styles.container}>
      <Typography variant='h5'>Manager Mes Projets</Typography>
      <div className='overflowX' style={styles.boardContainer}>
        {columns.map(column => (
          <div key={column.id} style={styles.column} onDragOver={handleDragOver} onDrop={() => handleDrop(column.id)}>
            <div style={styles.columnHeader}>
              <div style={styles.columnTitle}>
                {column.title} ({column.influencers.length})
              </div>
              <div style={styles.buttonGroup}>
                <button style={styles.iconButton}>
                  <Icon icon='tabler:plus' fontSize={20} />
                </button>
                <button style={styles.iconButton}>...</button>
              </div>
            </div>
            <div style={styles.columnContent}>
              {column.influencers.map(influencer => (
                <div
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
                </div>
              ))}
            </div>
            <DialogInfluencers
              handleChange={influencer => {
                handleAddInfluencers(column.id, influencer)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default KanbanBoard
