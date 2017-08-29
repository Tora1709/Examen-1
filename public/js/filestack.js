
    const link = document.getElementById('url');
    const client = filestack.init('A5DNJkmURN4Og4LSmqI2wz');

        client.pick({
          accept: 'image/*',
        }).then(function(result) {
          const fileUrl = result.filesUploaded[0].url;
          // link.href=fileUrl;
          // link.innerHTML=fileUrl;
          localStorage.setItem('lsFile', JSON.stringify(fileUrl));

          console.log(fileUrl);

        });
