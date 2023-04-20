import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { Input, Button } from 'antd'
import {
  UserOutlined,
  UnlockOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import styles from './Login.module.scss'
import { LOGIN_SAGA } from '../redux/constan/login'
import { NavLink } from 'react-router-dom'
// import { LOGIN_SAGA } from '../../redux/saga/constant/constLogin'

const Login = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // console.log(values);
      dispatch({
        type: LOGIN_SAGA,
        userLogin: {
          email: values.email,
          password: values.password
        }
      })
    },
  })
  return (
    <div className={styles.login}>
      <form onSubmit={formik.handleSubmit}>
        <h4>
          <b>Login TodolistCyberbug</b>
        </h4>
        <Input
          type="email"
          placeholder="email"
          name="email"
          prefix={<UserOutlined />}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <br />
        <br></br>
        <Input
          type="password"
          placeholder="password"
          name="password"
          prefix={<UnlockOutlined />}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button className="btn btn-primary btn-sm mt-3" type="submit">
          Login
        </button>
      </form>
      <p className="px-6 text-sm text-center dark:text-gray-400">Bạn đã có tài khoản chưa?
      <NavLink rel="noopener noreferrer" to='/register' className="hover:underline dark:text-violet-400">Đăng ký</NavLink>.
      </p>
      <div className={styles.iconLogin}>
        <Button className="align-item-center" type="primary" shape="circle">
          f
        </Button>
        <Button className="align-item-center" type="primary" shape="circle">
          <TwitterOutlined />
        </Button>
      </div>
    </div>
  )
}

export default Login
