// src/utils/downloadUtils.ts
export const downloadFile = (fileName: string) => {
    const link = document.createElement('a');
    link.href = `/docs/CV_Panji.pdf`; // Path to your CV file in the public folder
    link.download = fileName; // The name the file will have when downloaded
    document.body.appendChild(link); // Append link to the body
    link.click(); // Simulate click to start download
    document.body.removeChild(link); // Remove link after download
  };
  