
    var client = filestack.init('A5DNJkmURN4Og4LSmqI2wz');
    const link = document.getElementById('url');
    function showPicker() {
        client.pick({
          accept: 'image/*',
        }).then(function(result) {
          const fileUrl = result.filesUploaded[0].url;
          link.href=fileUrl;
          link.innerHTML=fileUrl;
          console.log(fileUrl)

        });
    }

                
