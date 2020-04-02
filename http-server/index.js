// Informative responses
//Status 100
exports.continues = (res, payload) => {
    return res.status(100).json(payload)
}

//Status 101
exports.switchingProtocols = (res, payload) => {
    return res.status(101).json(payload)
}

//Status 102
exports.processing = (res, payload) => {
    return res.status(102).json(payload)
}

//Status 103
exports.earlyHints = (res, payload) => {
    return res.status(103).json(payload)
}


//Success responses
//Status 200
exports.ok = (res, payload) => {
    return res.status(200).json(payload)
}

//Status 201
exports.created = (res, payload) => {
    return res.status(201).json(payload)
}

//Status 202
exports.accepted = (res, payload) => {
    return res.status(202).json(payload)
}

//Status 203
exports.nonAuthoritative = (res, payload) => {
    return res.status(203).json(payload)
}

//Status 204
exports.noContent = (res, payload) => {
    return res.status(204).json(payload)
}

//Status 205
exports.resetContent = (res, payload) => {
    return res.status(205).json(payload)
}

//Status 206
exports.partialContent = (res, payload) => {
    return res.status(206).json(payload)
}

//Status 207
exports.multiStatus = (res, payload) => {
    return res.status(207).json(payload)
}

//Status 226
exports.imUsed = (res, payload) => {
    return res.status(226).json(payload)
}


//Redirect mensages
//Status 300
exports.multipleChoice = (res, payload) => {
    return res.status(300).json(payload)
}

//Status 301
exports.movedPermanently = (res, payload) => {
    return res.status(301).json(payload)
}

//Status 302
exports.found = (res, payload) => {
    return res.status(302).json(payload)
}

//Status 303
exports.seeOther = (res, payload) => {
    return res.status(303).json(payload)
}

//Status 304
exports.notModified = (res, payload) => {
    return res.status(304).json(payload)
}

//Status 305
exports.useProxy = (res, payload) => {
    return res.status(305).json(payload)
}

//Status 306
exports.unused = (res, payload) => {
    return res.status(306).json(payload)
}

//Status 307
exports.temporaryRedirect = (res, payload) => {
    return res.status(307).json(payload)
}

//Status 308
exports.permanentRedirect = (res, payload) => {
    return res.status(308).json(payload)
}

//Customer error responses
//Status 400
exports.badRequest = (res, payload) => {
    return res.status(400).json(payload)
}

//Status 401
exports.unauthorized = (res, payload) => {
    return res.status(401).json(payload)
}

//Status 402
exports.paymentRequired = (res, payload) => {
    return res.status(308).json(payload)
}

//Status 403
exports.forbidden = (res, payload) => {
    return res.status(403).json(payload)
}

//Status 404
exports.notFound = (res, payload) => {
    return res.status(404).json(payload)
}

//Status 405
exports.methodNotAllowed = (res, payload) => {
    return res.status(405).json(payload)
}

//Status 406
exports.notAcceptable = (res, payload) => {
    return res.status(406).json(payload)
}

//Status 407
exports.proxyAuthenticationRequired = (res, payload) => {
    return res.status(407).json(payload)
}

//Status 408
exports.requestTimeout = (res, payload) => {
    return res.status(408).json(payload)
}

//Status 409
exports.conflict = (res, payload) => {
    return res.status(409).json(payload)
}

//Status 410
exports.gone = (res, payload) => {
    return res.status(410).json(payload)
}

//Status 411
exports.lengthRequired = (res, payload) => {
    return res.status(411).json(payload)
}

//Status 412
exports.preconditionFailed = (res, payload) => {
    return res.status(412).json(payload)
}

//Status 413
exports.payloadTooLarge = (res, payload) => {
    return res.status(413).json(payload)
}

//Status 414
exports.uriTooLong = (res, payload) => {
    return res.status(414).json(payload)
}

//Status 415
exports.unsupportedMediaType = (res, payload) => {
    return res.status(415).json(payload)
}

//Status 416
exports.requestedRangeNotSatisfiable = (res, payload) => {
    return res.status(416).json(payload)
}

//Status 417
exports.expectationFailed = (res, payload) => {
    return res.status(417).json(payload)
}

//Status 418
exports.teapot = (res, payload) => {
    return res.status(418).json(payload)
}

//Status 421
exports.misdirectedRequest = (res, payload) => {
    return res.status(421).json(payload)
}

//Status 422
exports.unprocessableEntity = (res, payload) => {
    return res.status(422).json(payload)
}

//Status 423
exports.locked = (res, payload) => {
    return res.status(423).json(payload)
}

//Status 424
exports.failedDependency = (res, payload) => {
    return res.status(424).json(payload)
}

//Status 425
exports.tooEarly = (res, payload) => {
    return res.status(425).json(payload)
}

//Status 426
exports.upgradeRequired = (res, payload) => {
    return res.status(426).json(payload)
}

//Status 428
exports.preconditionRequired = (res, payload) => {
    return res.status(428).json(payload)
}

//Status 429
exports.tooManyRequests = (res, payload) => {
    return res.status(429).json(payload)
}

//Status 431
exports.requestHeaderFieldsTooLarge = (res, payload) => {
    return res.status(431).json(payload)
}

//Status 451
exports.unavailableForLegalReasons = (res, payload) => {
    return res.status(451).json(payload)
}


//Server error responses
//Status 500
exports.serverError = (res, payload) => {
    return res.status(500).json(payload)
}

//Status 501
exports.notImplemented = (res, payload) => {
    return res.status(501).json(payload)
}

//Status 502
exports.badGataway = (res, payload) => {
    return res.status(502).json(payload)
}

//Status 503
exports.serviceUnavailable = (res, payload) => {
    return res.status(503).json(payload)
}

//Status 504
exports.gatawayTimeout = (res, payload) => {
    return res.status(504).json(payload)
}

//Status 505
exports.httpVersionNotSupported = (res, payload) => {
    return res.status(505).json(payload)
}

//Status 506
exports.variantAlsoNegotiates = (res, payload) => {
    return res.status(506).json(payload)
}

//Status 507
exports.insufficientStorage = (res, payload) => {
    return res.status(507).json(payload)
}

//Status 508
exports.loopDtected = (res, payload) => {
    return res.status(508).json(payload)
}

//Status 510
exports.notExtended = (res, payload) => {
    return res.status(510).json(payload)
}

//Status 511
exports.networkAuthenticationRequired = (res, payload) => {
    return res.status(511).json(payload)
}