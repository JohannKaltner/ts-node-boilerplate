import connection from '../../config/connection'
import { IRepairShop } from './repairShops.types'

const repairShop = function (repairShop: IRepairShop) {
  this.name = repairShop.name;
  this.cnpj = repairShop.cnpj;
  this.street = repairShop.street;
  this.number = repairShop.number;
  this.district = repairShop.district;
  this.city = repairShop.city;
  this.state = repairShop.state;
  this.lat = repairShop.lat;
  this.long = repairShop.long;
  this.userId = repairShop.userId;
  this.createdAt = new Date();
  this.updatedAt = new Date();
  this.zipCode = repairShop.zipCode;
  this.ddd = repairShop.ddd;
  this.phone1 = repairShop.phone1;
  this.phone2 = repairShop.phone2;
};


repairShop.findAll = function (page: string, limit: number, result: any) {
  const currPage = page && parseInt(page);
  const offset = currPage && (currPage - 1) * limit;
  const hasLimit = limit ? `limit ${limit}` : ''
  const hasOffset = offset ? `OFFSET ${offset}` : ''

  connection.query(`Select * from repairShops ${hasOffset
    } ${hasLimit}`, function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("oficinas : ", res);
        result(null, res);
      }
    });
};


repairShop.findById = function (id, result) {
  connection.query("Select * from repairShops where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

repairShop.create = function (repairShop, result) {
  connection.query("INSERT INTO repairShops set ?", repairShop, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};

repairShop.update = function (id, repairShop, result) {
  connection.query(
    "UPDATE oficinas SET nome=?,cnpj=?,rua=?,numero=?,bairro=?,cidade=?, estado=?, latitude=?, longitude=?, id_usuario =?, criadoEm=?, atualizadoEm=?,cep=?, ddd=?, telefone1=?, telefone2=?, WHERE id = ?",
    [
      repairShop.name,
      repairShop.cnpj,
      repairShop.street,
      repairShop.number,
      repairShop.district,
      repairShop.city,
      repairShop.state,
      repairShop.lat,
      repairShop.long,
      repairShop.userId,
      repairShop.createdAt,
      repairShop.updatedAt,
      repairShop.zipCode,
      repairShop.ddd,
      repairShop.phone1,
      repairShop.phone2,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
repairShop.delete = function (id, result) {
  connection.query("DELETE FROM oficinas WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};


export default repairShop