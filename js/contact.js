/**
 * Contact form handling with enhanced user experience
 */
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointment-form');
    const formMessage = document.getElementById('form-message');
    
    if (appointmentForm) {
        // Form submission handler
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(appointmentForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // Validate form data
            if (validateForm(formDataObj)) {
                // Show processing state
                const submitBtn = appointmentForm.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.textContent;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Đang xử lý...';
                submitBtn.disabled = true;
                
                // Simulate API call (replace with actual API call)
                setTimeout(() => {
                    // Show success message
                    showFormMessage('success', 'Yêu cầu đặt lịch của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ sớm nhất để xác nhận lịch hẹn.');
                    
                    // Reset form
                    appointmentForm.reset();
                    
                    // Reset button
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    
                    // Hide success message after some time
                    setTimeout(() => {
                        formMessage.style.display = 'none';
                    }, 6000);
                }, 1500);
            }
        });
        
        // Add input event listeners for real-time validation
        const inputs = appointmentForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateInput(this);
            });
            
            input.addEventListener('input', function() {
                // Remove error state if input is valid
                if (this.value.trim() !== '') {
                    this.classList.remove('error');
                    
                    // Special validation for email and phone
                    if (this.type === 'email' && !validateEmail(this.value)) {
                        this.classList.add('error');
                    } else if (this.id === 'phone' && this.value.trim() && !validatePhone(this.value)) {
                        this.classList.add('error');
                    }
                }
            });
        });
    }
    
    // Validate single input field
    function validateInput(input) {
        if (input.required && !input.value.trim()) {
            input.classList.add('error');
            return false;
        } else if (input.type === 'email' && input.value.trim() && !validateEmail(input.value)) {
            input.classList.add('error');
            return false;
        } else if (input.id === 'phone' && input.value.trim() && !validatePhone(input.value)) {
            input.classList.add('error');
            return false;
        } else {
            input.classList.remove('error');
            return true;
        }
    }
    
    // Validate all form data
    function validateForm(data) {
        let isValid = true;
        
        // Validate name
        if (!data.name.trim()) {
            showFormMessage('error', 'Vui lòng nhập họ và tên của bạn');
            document.getElementById('name').classList.add('error');
            isValid = false;
        }
        // Validate email
        else if (data.email && !validateEmail(data.email)) {
            showFormMessage('error', 'Vui lòng nhập địa chỉ email hợp lệ');
            document.getElementById('email').classList.add('error');
            isValid = false;
        }
        // Validate phone
        else if (data.phone && !validatePhone(data.phone)) {
            showFormMessage('error', 'Vui lòng nhập số điện thoại hợp lệ');
            document.getElementById('phone').classList.add('error');
            isValid = false;
        }
        // Validate date
        else if (!data.date) {
            showFormMessage('error', 'Vui lòng chọn ngày hẹn');
            document.getElementById('appointment-date').classList.add('error');
            isValid = false;
        }
        // Validate time
        else if (!data.time) {
            showFormMessage('error', 'Vui lòng chọn thời gian');
            document.getElementById('appointment-time').classList.add('error');
            isValid = false;
        }
        // Validate reason
        else if (!data.reason.trim()) {
            showFormMessage('error', 'Vui lòng nhập lý do khám');
            document.getElementById('reason').classList.add('error');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Email validation
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Phone validation
    function validatePhone(phone) {
        const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return re.test(String(phone));
    }
    
    // Show form message (success/error)
    function showFormMessage(type, message) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Smooth scroll to message if out of view
        const rect = formMessage.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
        
        if (!isInViewport) {
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    // Set minimum date for appointment to today
    const dateInput = document.getElementById('appointment-date');
    if (dateInput) {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        
        const todayStr = `${yyyy}-${mm}-${dd}`;
        dateInput.min = todayStr;
        
        // Set default date to tomorrow
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const ddTomorrow = String(tomorrow.getDate()).padStart(2, '0');
        const mmTomorrow = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const yyyyTomorrow = tomorrow.getFullYear();
        
        const tomorrowStr = `${yyyyTomorrow}-${mmTomorrow}-${ddTomorrow}`;
        dateInput.value = tomorrowStr;
    }
});
