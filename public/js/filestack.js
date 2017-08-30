
    const link = document.getElementById('url');
    const client = filestack.init('A5DNJkmURN4Og4LSmqI2wz');

        client.pick({
          accept: ['image/*', '.pdf', 'video/mp4','docx','.zip','.txt'],
        }).then(function(result) {
          const fileUrl = result.filesUploaded[0].url;
          localStorage.setItem('lsFile', JSON.stringify(fileUrl));

          console.log(fileUrl);

        });
