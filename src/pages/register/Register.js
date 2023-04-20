import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { userServices } from '../../services/userServices'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            phoneNumber: ''
        },
        validationSchema: yup.object({
            email: yup.string().email('Địa chỉ email không hợp lệ').required('Email không thể để trống'),
            password: yup.string().required('Mật khẩu không thể để trống').min(6, 'Mật khẩu tối đa 12 ký tự tối thiểu 6 ký tự').max(12, 'Mật khẩu tối đa 12 kí tự tối thiểu 6 kí tự'),
            name: yup.string().required('Họ tên không thể để trống').min(6, 'Tối thiểu 6 ký tự tối đa 30 ký tự').max(30, 'Tối thiểu 6 ký tự tối đa 30 ký tự'),
            phoneNumber: yup.number().required('Điện thoại không thể để trống'),
        }),
        onSubmit: async (values) => {
            try {
                const result = await userServices.register(values)
                console.log(result)
                alert('Bạn đã đăng ký thành công!')
                navigate('/')
                window.location.reload()
            } catch (err) {
                console.log(err);
            }
        }
    })

    return (
        <div>
            <section className="vh-100 bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")', }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-1 w-75 m-auto">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card bg-light" style={{ borderRadius: 15 }} >
                                    <div className="card-body p-4">
                                        <h2 className=" h4 text-center mb-3">Tạo một tài khoản</h2>
                                        <form onSubmit={formik.handleSubmit}>
                                        <div className="form-outline mb-2">
                                                <label className="form-label" >Email:</label>
                                                <input value={formik.values.email} type="email" name='email' onChange={formik.handleChange} className="form-control form-control-sm" />
                                                {formik.errors.email && formik.touched.email && (<p style={{ color: 'red' }}>{formik.errors.email}</p>)}
                                            </div>
                                            <div className="form-outline mb-2">
                                                <label className="form-label" >password:</label>
                                                <input value={formik.values.password} type="password" name='password' onChange={formik.handleChange} className="form-control form-control-sm" />
                                                {formik.errors.password && formik.touched.password && (<p style={{ color: 'red' }}>{formik.errors.password}</p>)}
                                            </div>
                                           
                                            <div className="form-outline mb-2">
                                                <label className="form-label" >Name:</label>
                                                <input value={formik.values.name} type="text" name='name' onChange={formik.handleChange} className="form-control form-control-sm" />
                                                {formik.errors.name && formik.touched.name && (<p style={{ color: 'red' }}>{formik.errors.name}</p>)}
                                            </div>
                                           
                                            <div className="form-outline mb-2">
                                                <label className="form-label" >PhoneNumber:</label>
                                                <input value={formik.values.phoneNumber} type="number" name='phoneNumber' onChange={formik.handleChange} className="form-control form-control-sm" />
                                                {formik.errors.phoneNumber && formik.touched.phoneNumber && (<p style={{ color: 'red' }}>{formik.errors.phoneNumber}</p>)}
                                            </div>
                                            <div className="form-check justify-content-start mb-3">
                                                <input className="form-check-input me-2" type="checkbox" id="form2Example3cg" />
                                                <label className="form-check-label" htmlFor="form2Example3g">
                                                    Tôi đồng ý tất cả các thông tin trong <a href="#!" className="text-body"><u>Điều khoản dịch vụ</u></a>
                                                </label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button value={formik.values.email} type="submit" className="btn btn-success btn-block btn-md gradient-custom-4 text-body">Register</button>
                                            </div>
                                            <p className="text-center text-muted mt-2 mb-0">Đã có tài khoản? <a style={{ cursor: 'pointer' }} onClick={()=>{navigate('/')} } className="fw-bold text-body"><u>Đăng nhập tại đây</u></a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Register
