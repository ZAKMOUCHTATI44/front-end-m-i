import { useRouter } from 'next/router'

import Rapport from '../Rapport'
import { useRef, useState } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { Button, Card } from '@mui/material'

// import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf'

const Page = () => {
  const router = useRouter()
  const [Loading, setLoading] = useState<boolean>(true)

  // const downloadPDF = async () => {
  //   if (containerRef.current) {
  //     const pdf = new jsPDF({
  //       orientation: 'portrait',
  //       unit: 'mm',
  //       format: 'a4' // A4 size in mm
  //     })

  //     const pageWidth = pdf.internal.pageSize.getWidth()
  //     const pageHeight = pdf.internal.pageSize.getHeight()

  //     const divs = containerRef.current.querySelectorAll('div.page') // Select all divs with class 'page'

  //     for (let i = 0; i < divs.length; i++) {
  //       const div = divs[i] as HTMLElement

  //       // Capture each div as an image
  //       const canvas = await html2canvas(div)
  //       const imgData = canvas.toDataURL('image/png')

  //       const imgWidth = pageWidth
  //       const imgHeight = (canvas.height * imgWidth) / canvas.width

  //       // Add the image to the PDF
  //       pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)

  //       // Add a new page if it's not the last div
  //       if (i < divs.length - 1) {
  //         pdf.addPage()
  //       }
  //     }

  //     // Save the PDF
  //     pdf.save('captured-divs.pdf')
  //   }
  // }

  const exportRef = useRef<HTMLDivElement>(null)

  const { id } = router.query as { id: string }

  const exportToPDF = async () => {
    if (!exportRef.current) return

    setLoading(true)

    // Get all sections within the container
    const sections = exportRef.current.querySelectorAll('.section-class') // Replace '.section-class' with the class or tag for your sections
    if (!sections.length) {
      throw new Error('No sections found to export.')
    }

    const pdf = new jsPDF('p', 'mm', 'a4')
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i]

      // Render each section as a canvas
      const canvas = await html2canvas(section as HTMLElement)
      const imgData = canvas.toDataURL('image/png')

      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const pdfImageHeight = (pdfWidth / imgWidth) * imgHeight

      if (i > 0) {
        pdf.addPage()
      }

      // Set background color to #25293c
      pdf.setFillColor(37, 41, 60) // RGB values for #25293c
      pdf.rect(0, 0, pdfWidth, pdfHeight, 'F') // Fill the entire page with the background color

      // Add the image to the page
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfImageHeight)
    }

    pdf.save('exported-sections.pdf')
  }

  return (
    <>
      <div>
        <Button variant='contained' onClick={exportToPDF} style={{ marginTop: '20px' }}>
          Export as PDF
        </Button>

        {Loading && (
          <>
            <Card
              sx={{
                position: 'absolute',
                display: 'none',
                padding: 5,
                zIndex: 10,
                width: '500px'
              }}
            >
              {' '}
              Exporting report, please wait...
            </Card>
          </>
        )}

        <div ref={exportRef} style={{ paddingInline: '10px 20px', backgroundColor: '#25293c' }}>
          {id && <Rapport id={id} />}
        </div>
      </div>
    </>
  )
}

export default Page
