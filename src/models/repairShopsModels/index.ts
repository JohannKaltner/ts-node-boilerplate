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


repairShop.getPagination = function (page: string, limit: number, result: any) {
  const pagina = parseInt(page);
  const offset = (pagina - 1) * limit;
  connection.query(
    "Select * from oficinas limit " + limit + " OFFSET " + offset,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

repairShop.findAll = function (result: any) {
  connection.query("Select * from oficinas limit 20", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("oficinas : ", res);
      result(null, res);
    }
  });
};

repairShop.create = function (newEntrie, result) {
  connection.query("INSERT INTO oficinas set ?", newEntrie, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res);
      result(null, res);
    }
  });
};