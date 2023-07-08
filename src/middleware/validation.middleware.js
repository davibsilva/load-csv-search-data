const validateFileParams = (req, res, next) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ success: false, message: 'File is required' });
  }

  if (req.file.mimetype != 'text/csv') {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid file format' });
  }
  next();
};

export { validateFileParams };
