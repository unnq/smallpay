import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import SiteLayout from '../layout/SiteLayout.jsx'
import DashboardLayout from '../layout/DashboardLayout.jsx'


import Home from '../pages/Home.jsx'
import Login from '../pages/auth/Login.jsx'
import Signup from '../pages/auth/Signup.jsx'


import PublicBusiness from '../pages/booking/PublicBusiness.jsx'
import SelectTime from '../pages/booking/SelectTime.jsx'
import Confirmation from '../pages/booking/Confirmation.jsx'


import Dashboard from '../pages/business/Dashboard.jsx'
import Services from '../pages/business/Services.jsx'
import Availability from '../pages/business/Availability.jsx'
import Bookings from '../pages/business/Bookings.jsx'
import PaymentRequests from '../pages/business/PaymentRequests.jsx'
import Settings from '../pages/business/Settings.jsx'


export default function Router(){
return (
<HashRouter>
<Routes>
<Route element={<SiteLayout />}>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />


<Route path="/b/:slug" element={<PublicBusiness />} />
<Route path="/b/:slug/time" element={<SelectTime />} />
<Route path="/b/:slug/confirmation" element={<Confirmation />} />
</Route>


<Route element={<DashboardLayout />}>
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/dashboard/services" element={<Services />} />
<Route path="/dashboard/availability" element={<Availability />} />
<Route path="/dashboard/bookings" element={<Bookings />} />
<Route path="/dashboard/payments" element={<PaymentRequests />} />
<Route path="/dashboard/settings" element={<Settings />} />
</Route>


<Route path="*" element={<Navigate to="/" replace />} />
</Routes>
</HashRouter>
)
}
