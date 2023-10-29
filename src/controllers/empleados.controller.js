import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleado");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const getEmpleadosById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM empleado WHERE id =?", [id]);
    if (rows.length <= 0)
      return res.status(404).json({ mensaje: "No se encontraron datos" });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const postEmpleados = async (req, res) => {
  try {
    const { nombre, salario } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO empleado (nombre, salario) VALUES (?,?)",
      [nombre, salario]
    );
    res.send({
      id: rows.insertId,
      nombre,
      salario,
    });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const deleteEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query("DELETE FROM empleado WHERE id =?", [id]);
    if (result.affectedRows <= 0)
      return res.status(404).json({ mensaje: "No se encontraron datos" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const putEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, salario } = req.body;
    const [result] = await pool.query(
      "UPDATE empleado SET nombre =?, salario =? WHERE id =?",
      [nombre, salario, id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({ mensaje: "No se encontraron datos" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const patchEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, salario } = req.body;
    const [result] = await pool.query(
      "UPDATE empleado SET nombre = IFNULL(?, nombre), salario =IFNULL(?, salario) WHERE id =?",
      [nombre, salario, id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({ mensaje: "No se encontraron datos" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
