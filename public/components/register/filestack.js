
    var client = filestack.init('A5DNJkmURN4Og4LSmqI2wz');
    function showPicker() {
        client.pick({
        }).then(function(result) {
            console.log(JSON.stringify(result.filesUploaded))
        });
    }
