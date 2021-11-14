/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from '@keystone-next/keystone';

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { statelessSessions } from '@keystone-next/keystone/session';
import { lists } from './schemas';

// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth } from './auth';
import { PORT, DATABASE_URL, SESSION_MAX_AGE, SESSION_SECRET } from './config';

import { insertSeedData } from './seed-data';

const session = statelessSessions({
  maxAge: SESSION_MAX_AGE,
  // The session secret is used to encrypt cookie data (should be an environment variable)
  secret: SESSION_SECRET,
});

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    db: {
      provider: 'postgresql',
      useMigrations: true,
      url: DATABASE_URL,
      onConnect: async (context) => {
        if (process.argv.includes('--seed-data')) {
          console.log('Starting Seeding 🌱 ');
          await insertSeedData(context.prisma);
          console.log('Finished Seeding 🌱 ');
        }
      },
    },
    server: {
      port: PORT,
      cors: {
        origin: '*',
        credentials: true,
      },
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
