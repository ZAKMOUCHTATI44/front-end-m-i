import { useRouter } from 'next/router'

import Rapport from '../Rapport'

// import html2canvas from 'html2canvas'
// import jsPDF from 'jspdf'

const Page = () => {
  const router = useRouter()

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

  const { id } = router.query as { id: string }

  return <>{id && <Rapport id={id} />}</>
}

export default Page
