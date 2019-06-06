class Api {
  constructor(entity, id) {
    this.entity = entity;
  }

  getAll = async () => {
    const r = await fetch(`/api/${this.entity}`);
    return await r.json();
  };

  // getOne = async id => {
  //   console.log(id);
  //   const r = await fetch(`/api/stories/${id}`);
  //   console.log(fetch(`/api/stories/5cf6d374cc852431b61758cb`));
  //   return await r.json();
  // };

  getOne = async id => {
    console.log(id);
    const r = await fetch(`/api/${this.entity}/${id}`);

    return await r.json();
  };

  create = async entity => {
    const r = await fetch(
      `/api/${this.entity}`,
      this.getOptions(`post`, entity.values)
    );
    return await r.json();
  };

  getOptions = (method, body = null, upload = false) => {
    const options = {
      method: method.toUpperCase()
    };

    if (!upload) {
      options.headers = {
        "content-type": `application/json`
      };
    }
    if (body) {
      if (upload) {
        const formData = new FormData();
        for (var key in body) {
          formData.append(key, body[key]);
        }
        options.body = formData;
      } else {
        options.body = JSON.stringify(body);
      }
    }
    return options;
  };
}

export default Api;
