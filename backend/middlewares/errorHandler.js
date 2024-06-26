const errorHandler = (err, _, res, next) => {
    const statusCode = res.statusCode < 400 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message
    })
}

export default errorHandler