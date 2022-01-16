import React from 'react';
import axios from 'axios';
import Upload from 'rc-upload';
import { Box, Button } from '@chakra-ui/react';

const UploadImage = (headers, onProgress, url, file, onSuccess, onError) => {
    axios.put(url, file, {
        headers,
        onUploadProgress: ({ total, loaded }) => {
          onProgress({ percent: Math.round((loaded / total) * 100).toFixed(2) }, file);
        },
      })
      .then(({ data: response }) => {
        onSuccess(response, url);
      })
      .catch(onError);
}

const uploadProps = {
  action: '/upload.do',
  multiple: false,
  data: { a: 1, b: 2 },
  onStart(file) {
    console.log('onStart', file, file.name);
  },
  onSuccess(res, file) {
    console.log('onSuccess', res, file.name);
  },
  onError(err) {
    console.log('onError', err);
  },
  onProgress({ percent }, file) {
    console.log('onProgress', `${percent}%`, file.name);
  },
  
  customRequest({
    action,
    data,
    file,
    filename,
    headers,
    onError,
    onProgress,
    onSuccess,
    withCredentials,
  }) {
    // const formData = new FormData();
    // if (data) {
    //   Object.keys(data).forEach(key => {
    //     formData.append(key, data[key]);
    //   });
    // }

    axios.post("http://localhost:8080/cars/me/upload?file="+file.name, {},
    {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    }).then(res => {
        const url = res.data;
        localStorage.setItem('filename', url.filename)
        UploadImage(headers, onProgress, url.key, file, onSuccess, onError);
    }).catch(err => {
        console.log("[ERROR]: \n", err)
    });

    return {
      abort() {
        console.log('upload progress is aborted.');
      },
    };
  },
};

export default function DropImage() {
  return (
    <Box>
        <Upload {...uploadProps}>
            <Button colorScheme="teal" variant="outline">Select image</Button>
        </Upload>
    </Box>
  );
};
