

export const asyncHandler = (fn) => async (req, res) => {
    try {
        await fn(req, res, next)
        console.log('hi')
    } catch (error) {
        res.status(error.code | 500).json({
            success: false,
            message: error.message
        })
    }
}