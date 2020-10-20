import { createConnection } from 'typeorm'
import ormconfig from '../../ormconfig.js'
createConnection(ormconfig)
  .then(() => console.log('Successfully connect with database'))
  .catch((err) => console.log({ message: err }))
