import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HerosRoutes } from '../heros'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='login' element={
              <PublicRouter>
                <LoginPage />
              </PublicRouter>
            } />
            <Route path='/*' element={
                <PrivateRouter>
                  <HerosRoutes />
                </PrivateRouter>
            }/>
        </Routes>
    </>
  )
}

export default AppRouter