const db = require('./root');

db.newDb('samiran');
db.add('samiran', 'samu', 'JAY SHREE RAMTHAKUR!');

db.readWholeDb('samiran');
return;