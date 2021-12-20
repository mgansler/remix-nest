import { Injectable, NestMiddleware } from '@nestjs/common'
import { createRequestHandler } from '@remix-run/express'
import { NextFunction, Request, Response } from 'express'
import path from 'path'

const BUILD_DIR = path.join(process.cwd(), 'server/build')

@Injectable()
export class RemixMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    req.url = req.originalUrl
    if (process.env.NODE_ENV !== 'production') {
      purgeRequireCache()
    }
    return createRequestHandler({ build: require(BUILD_DIR) })(req, res, next)
  }
}

function purgeRequireCache() {
  // purge require cache on requests for "server side HMR" this won't let
  // you have in-memory objects between requests in development,
  // alternatively you can set up nodemon/pm2-dev to restart the server on
  // file changes, we prefer the DX of this though, so we've included it
  // for you by default
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key]
    }
  }
}
