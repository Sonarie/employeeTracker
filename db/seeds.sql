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
  ('Director', '100,000', 1),
  ('Finishing', '35,000', 4),
  ('Training', '60,000', 1),
  ('Payroll', '60,000', 2),
  ('Account_Rep', '65,000', 3),
  ('Benefits', '40,000', 1)
  ('Recruiting', '55,000', 1)
  ('Molding', '85,000', 4);

INSERT INTO employee
  (first_name, last_name, role_id, manager_id)
VALUES
  ('Michele', 'Byronn', 1, 1),
  ('Patrick', 'Larsnick', 1, 3),
  ('Larry', 'Lucas', 2, 6),
  ('Sandy', 'Dibb', 4, 1),
  ('Kristi', 'Rittman', 3, 1),
  ('Abdul', 'Mohammed', 4, 2),
  ('Amanda', 'Creuter', 1, 3);
  