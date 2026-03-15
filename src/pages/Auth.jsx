const handleGoogleLogin = async () => {
  setLocalError('')
  setIsLoading(true)
  try {
    const result = await loginWithGoogle()
    if (result) navigate('/')  // Solo naviga se il login è andato a buon fine
  } catch (err) {
    setLocalError(err.message)
  } finally {
    setIsLoading(false)
  }
}