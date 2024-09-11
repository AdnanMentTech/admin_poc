'use client';

import React, { useState } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

interface FileWithPreview extends File {
  preview: string;
}

export default function FileUploadComponent(): React.JSX.Element {
  const [selectedFiles, setSelectedFiles] = useState<FileWithPreview[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) })
    );
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    // Api call here
  };

  const renderPreview = (file: FileWithPreview) => {
    if (file.type.startsWith('image/')) {
      return (
        <img
          src={file.preview}
          alt={file.name}
          style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '8px' }}
        />
      );
    } else if (file.type.startsWith('video/')) {
      return (
        <video controls style={{ width: '100%', height: '100%', borderRadius: '8px' }}>
          <source src={file.preview} type={file.type} />
        </video>
      );
    } else if (file.type === 'application/pdf') {
      return (
        <iframe src={file.preview} style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }} />
      );
    } else {
      return <Typography color="error">Unsupported: {file.name}</Typography>;
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" bgcolor="#f4f7fc" p={4} minHeight="100vh">
      <Box width="100%" mb={4}>
        <label
          htmlFor="file-input"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100px',
            border: '2px dashed #ccc',
            borderRadius: '8px',
            cursor: 'pointer',
            textAlign: 'center',
            padding: '10px',
            backgroundColor: '#fff',
            transition: 'border-color 0.3s',
          }}
        >
          <Typography variant="body1">Click to select or drag and drop files</Typography>
          <Typography variant="caption" color="textSecondary">
            Supported: Images, Videos, PDFs
          </Typography>
          <input
            id="file-input"
            type="file"
            accept="image/*,video/*,.pdf"
            multiple
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </label>
      </Box>

      <Box width="100%">
        {selectedFiles.length > 0 && (
          <Typography variant="h6" gutterBottom>
            Selected Files
          </Typography>
        )}
        <Grid container spacing={2}>
          {selectedFiles.map((file, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '10px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                  height: 'auto',
                  width: '100%',
                }}
              >
                <CardContent
                  sx={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '8px', mb: 1, p: 0 }}
                >
                  {renderPreview(file)}
                </CardContent>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.875rem',
                    color: '#333',
                    textAlign: 'center',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {file.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
