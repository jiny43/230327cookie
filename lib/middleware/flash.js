module.exports = (req,res,next)=> {
  //플래시 메세지가 있다면
  //콘텍스트에 전달하고 내용을 비웁니다.
  res.local.flash =req.seesion.flash
  delete req.seesion.flash
  next()
}