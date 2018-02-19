const encodeBase64 = (uploadFile: File) => {
  return new Promise(function(resolve, reject) {
    const reader = new FileReader()
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      resolve(reader.result); // base64
    }
  })
};

const uploadToServe = (file: File, type: String, uploadUrl: String, timeout :Number) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append(type, file); // name: type

    const xhr = new XMLHttpRequest();
    xhr.open('POST', uploadUrl, true);
    xhr.timeout = timeout;

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        // readyState
        if (xhr.readyState === 4) {
          console.log(xhr)
          if (xhr.status === 0) {
            reject('the error flag is set or the state is UNSENT or OPENED');
          } else {
            reject(xhr.statusText);
          }
        }
      }
    }
    xhr.send(formData);
    xhr.ontimeout = (event) => {
      console.error(`time is more than ${timeout / 1000} seconds`)
    }
  })
}

export {
  encodeBase64,
  uploadToServe
}
