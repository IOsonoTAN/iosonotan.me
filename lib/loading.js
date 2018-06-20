export default (isLoading = true) => {
  const loadingText = 'loading-text'

  if (isLoading) {
    const offsetTop = document.getElementsByTagName('html')[0].scrollTop

    document.getElementById(loadingText).style.top = `${offsetTop}px`
    document.getElementById(loadingText).style.visibility = 'visible'
    document.getElementsByTagName('body')[0].classList.add('lock')
  } else {
    document.getElementById(loadingText).style.top = '0px'
    document.getElementById(loadingText).style.visibility = 'hidden'
    document.getElementsByTagName('body')[0].classList.remove('lock')
  }
}
