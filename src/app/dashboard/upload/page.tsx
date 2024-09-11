'use client';

import React, { ChangeEvent, useState } from 'react';
import { Box, Button, CircularProgress, Grid, Paper, styled, Typography } from '@mui/material';

// Styled components
const CenteredPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
  maxWidth: 600,
  margin: 'auto',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  borderRadius: 12, // Increased border-radius for the card
});

const SelectButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4CAF50', // Changed button color to green
  color: theme.palette.common.white,
  textTransform: 'none',
  padding: '12px 20px',
  borderRadius: '50px', // Rounded button
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    backgroundColor: '#388E3C', // Darker green on hover
  },
}));

const UploadButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2196F3', // Changed button color to blue
  color: theme.palette.common.white,
  textTransform: 'none',
  padding: '12px 20px',
  borderRadius: '50px', // Rounded button
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    backgroundColor: '#1976D2', // Darker blue on hover
  },
}));

export default function UploadPage(): React.FunctionComponent {
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        setMessage(`Upload failed: ${response.statusText}`);
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred during the upload');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 2 }}>
      <CenteredPaper>
        <Typography variant="h4" gutterBottom>
          File Upload
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <SelectButton variant="contained" component="label" fullWidth>
              Select File
              <input type="file" hidden onChange={handleFileChange} />
            </SelectButton>
          </Grid>
          <Grid item xs={12}>
            {fileName && (
              <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
                Selected File: {fileName}
              </Typography>
            )}
          </Grid>
          {/* <Grid item xs={12}>
            <UploadButton variant="contained" onClick={handleUpload} fullWidth disabled={loading} sx={{ mt: 2 }}>
              {loading ? <CircularProgress size={24} /> : 'Upload'}
            </UploadButton>
          </Grid> */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 2 }}>
              {message}
            </Typography>
          </Grid>
        </Grid>
      </CenteredPaper>
    </Box>
  );
}
