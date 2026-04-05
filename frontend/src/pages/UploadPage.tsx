import { useCallback } from 'react';
import FileDropZone from '../components/FileDropZone';

export default function UploadPage() {
  const handleFiles = useCallback((files: File[]) => {
    // Placeholder — file processing will be added later
    console.log('Files received:', files.map(f => f.name));
  }, []);

  return (
    <div className="space-y-6">
      <FileDropZone
        accept=".csv"
        multiple
        onFiles={handleFiles}
        label="Upload Transaction CSV"
        description="Drag and drop your bank CSV files here, or click to browse"
      />
    </div>
  );
}
