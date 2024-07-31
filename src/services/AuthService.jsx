import { setUser, setResetPassword, updateUser, setChangePassword } from "../redux/slices/AuthSlice";
import api from "../api/Api";

export const login = async (payload, dispatch, navigate) => {
    const { email, password } = payload;
    try {
        const response = await api.post('/api/auth/employee/login', { email, password }, {
            withCredentials: true,
          });

        const userData = response.data.data.user;
        dispatch(setUser(userData));
        localStorage.setItem('token', response.data.data.accessToken);
        navigate('/dashboard/home');
        return { success: true };
    } catch (error) {
        console.error("Login Error:", error.response.data);
        return { success: false, message: error.response.data.message || 'An error occurred' };
    }
};

export const resetPassword = (payload) => async (dispatch) => {
    const { email } = payload;
    try {
        const response = await api.post('/api/auth/employee/forgot-password', { email });
        dispatch(setResetPassword(response.data.resetPassword));
        return { success: true, message: 'Password reset link sent to your email' };
    } catch (error) {
        console.error("Reset Password Error:", error.response.data);
        return { success: false, message: error.response.data.message || 'An error occurred' };
    }
};

export const changePassword = (payload) => async (dispatch) => {
    const { oldPassword, newPassword } = payload;
    try {
        const response = await api.post('/api/auth/employee/change-password', { oldPassword, newPassword });
        dispatch(setChangePassword(response.data.data));
        return { success: true, message: 'Password changed successfully' };
    } catch (error) {
        console.error("Change Password Error:", error.response.data);
        return { success: false, message: error.response.data.message || 'An error occurred' };
    }
};

export const updateUserDetails = (userId, userData) => async (dispatch) => {
    try {
        const response = await api.put(`/api/v1/employee/userupdate/${userId}`, userData);
        dispatch(updateUser(response.data.data));
    } catch (error) {
        console.error("Update User Details Error:", error.response.data);
        return error.response.data;
    }
};

