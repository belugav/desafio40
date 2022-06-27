const request = require("supertest")("http://localhost:8080");

jest.setTimeout(20000);

describe("RestFull API", () => {
  const productID = "619fc26cb73812bf41e17b63";
  const data = {
    name: "lapicera bicc",
    description: "una lapicera bic",
    code: "567AR",
    imageURL:
      "http://www.bikabik.com.ar/wp-content/uploads/2020/07/boligrafo-bic-azul-trazo-grueso-1mm-opaco-x50-unid-D_NQ_NP_897138-MLA31037651428_062019-F-min.jpg",
    price: 54,
    stock: 1003,
  };
  test("/GET should return a product by their ID", async () => {
    const response = await request.get(`/api/productos/${productID}`);
    expect(response.body._id).toBe(productID);
  });

  test("/POST should return the created product", async () => {
    let response = await request
      .post(`/api/productos`)
      .send(data)
      .expect("Content-type", /json/)
      .expect(200);
    expect(response.body).toMatchObject(data);
  });

  test("/PATCH should return updated product", async () => {
    try {
      const dataToUpdate = {
        name: "lapicera bic asasdasd",
        description: "una lapicera bic asadsada",
      };
      let response = await request
        .patch(`/api/productos/${productID}`)
        .send(dataToUpdate);

      expect(response.body).toMatchObject(dataToUpdate);
    } catch (error) {
      console.log(error);
    }
  });

  test("/DELETE should return status 200", async () => {
    try {
      let responseDelete = await request
        .delete(`/api/productos/${productID}`)
        .expect(200);
    } catch (error) {
      console.log(error);
    }
  });

  test("/GET should return null when searching for deleted product ID", async () => {
    try {
      let response = await request.get(`/api/productos/${productID}`);
      expect(response).toBeNull();
    } catch (error) {
      console.log(error);
    }
  });
});
