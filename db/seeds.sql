INSERT INTO department
  (name)
VALUES
  ('HR'),
  ('Finance'),
  ('Sales'),
  ('Manufacturing');

INSERT INTO role
  (title, salary, department_id)
VALUES
  ('Director', 100, 1),
  ('Finishing', 35, 4),
  ('Training', 60, 1),
  ('Payroll', 60, 2),
  ('Account_Rep', 65, 3),
  ('Benefits', 40, 1),
  ('Recruiting', 55, 1),
  ('Molding', 85, 4);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Michele', 'Byronn', 1, null),
  ('Patrick', 'Larsnick', 1, null),
  ('Larry', 'Lucas', 2, null),
  ('Sandy', 'Dibb', 4, null),
  ('Kristi', 'Rittman', 3, null),
  ('Abdul', 'Mohammed', 4, null),
  ('Amanda', 'Creuter', 1, null);
  