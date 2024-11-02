import React from 'react'

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',

  },
  section: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#2b2d42'
  },
  value: {
    fontSize: '0.9rem',
    color: '#4a4a4a',
    marginTop: '0.3rem'
  }
}

// Define the badge style as a function to apply dynamic colors
const badgeStyle = (backgroundColor: string, color: string): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.2rem 0.5rem',
  borderRadius: '8px',
  backgroundColor,
  color,
  fontSize: '0.85rem',
  fontWeight: 500
})

const StatusCard = ({ data }: { data: Data }) => {
  return (
    <div style={styles.container} >
      <div style={styles.section}  >
        <div style={styles.label}>
          Growth <span style={badgeStyle('#e6f4ea', '#1c7c54')}>● Gaining</span>
        </div>
        <div style={styles.value}>{data.creator.metrics.growth.value}</div>
      </div>
      <div style={styles.section}>
        <div style={styles.label}>
          Activity <span style={badgeStyle('#e6f4ea', '#1c7c54')}>● Recent</span>
        </div>
        <div style={styles.value}>{data.creator.metrics.activity.value} </div>
      </div>
      <div style={styles.section}>
        <div style={styles.label}>
          Reachability <span style={badgeStyle('#f8e1e1', '#d9534f')}>● Out of Scope</span>
        </div>
        <div style={styles.value}>{data.creator.metrics.reachability.value}</div>
      </div>
    </div>
  )
}

export default StatusCard
