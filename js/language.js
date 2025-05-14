// Language translation data
const translations = {
    'vi': {
        // Navigation
        'nav_home': 'Trang chủ',
        'nav_about': 'Giới thiệu',
        'nav_expertise': 'Chuyên môn',
        'nav_education': 'Đào tạo',
        'nav_publications': 'Công bố khoa học',
        'nav_projects': 'Dự án nghiên cứu',
        'nav_testimonials': 'Đánh giá',
        'nav_contact': 'Liên hệ',
        
        // Hero section
        'hero_title': 'BS. PHẠM HOÀNG ANH',
        'hero_subtitle': 'Bác sĩ Nội trú - Chuyên khoa Nội',
        'hero_text': 'Chăm sóc sức khỏe tận tâm, điều trị hiệu quả',
        'hero_btn': 'Đặt lịch hẹn',
        
        // About section
        'about_title': 'Giới thiệu',
        'about_position': 'Bác sĩ Nội trú - Bệnh viện Đa khoa Trung ương',
        'about_p1': 'Xin chào! Tôi là Phạm Hoàng Anh, hiện đang là bác sĩ nội trú chuyên khoa Nội tại Bệnh viện Đa khoa Trung ương. Với niềm đam mê y học và mong muốn mang lại sức khỏe tốt nhất cho bệnh nhân, tôi luôn không ngừng học hỏi và nâng cao kiến thức chuyên môn.',
        'about_p2': 'Tôi tin rằng việc điều trị không chỉ dừng lại ở việc chữa bệnh mà còn là sự đồng hành, lắng nghe và thấu hiểu bệnh nhân. Mỗi bệnh nhân đều là một trường hợp đặc biệt và cần được chăm sóc với phương pháp phù hợp nhất.',
        'stat_years': 'Năm kinh nghiệm',
        'stat_patients': 'Bệnh nhân đã điều trị',
        'stat_awards': 'Giải thưởng',
        
        // Expertise section
        'expertise_title': 'Chuyên môn',
        'expertise_1_title': 'Nội tim mạch',
        'expertise_1_text': 'Chẩn đoán và điều trị các bệnh lý về tim mạch, cao huyết áp, rối loạn nhịp tim.',
        'expertise_2_title': 'Nội hô hấp',
        'expertise_2_text': 'Điều trị các bệnh về đường hô hấp, viêm phổi, hen phế quản, COPD.',
        'expertise_3_title': 'Nội tiêu hóa',
        'expertise_3_text': 'Chẩn đoán và điều trị các bệnh lý về đường tiêu hóa, dạ dày, đại tràng.',
        'expertise_4_title': 'Nội thần kinh',
        'expertise_4_text': 'Điều trị các bệnh về hệ thần kinh, đau đầu, rối loạn giấc ngủ.',
        
        // Education section
        'education_title': 'Đào tạo & Kinh nghiệm',
        'education_1_period': '2023 - Hiện tại',
        'education_1_degree': 'Bác sĩ Nội trú',
        'education_1_school': 'Bệnh viện Đa khoa Trung ương',
        'education_2_period': '2021 - 2023',
        'education_2_degree': 'Thạc sĩ Y học',
        'education_2_school': 'Đại học Y Hà Nội',
        'education_3_period': '2020 - 2021',
        'education_3_degree': 'Bác sĩ thực hành',
        'education_3_school': 'Bệnh viện Bach Mai',
        'education_4_period': '2014 - 2020',
        'education_4_degree': 'Bác sĩ Đa khoa',
        'education_4_school': 'Đại học Y Hà Nội',
        
        // Publications section
        'publications_title': 'Công bố khoa học',
        'pub_1_year': '2023',
        'pub_1_title': 'Hiệu quả của phương pháp điều trị mới trong bệnh tăng huyết áp kháng trị',
        'pub_1_authors': 'Phạm Hoàng Anh, Nguyễn Văn A, Trần Thị B',
        'pub_1_journal': 'Tạp chí Y học Việt Nam, 45(2), 78-85',
        'pub_1_abstract': 'Nghiên cứu đánh giá hiệu quả của phương pháp phối hợp thuốc mới trong điều trị tăng huyết áp kháng trị trên 120 bệnh nhân tại Bệnh viện Đa khoa Trung ương.',
        'pub_2_year': '2022',
        'pub_2_title': 'Đánh giá yếu tố nguy cơ tim mạch ở bệnh nhân đái tháo đường type 2',
        'pub_2_authors': 'Phạm Hoàng Anh, Lê Văn C, Đỗ Thị D',
        'pub_2_journal': 'Y học thực hành, 32(4), 112-118',
        'pub_2_abstract': 'Nghiên cứu cắt ngang trên 250 bệnh nhân đái tháo đường type 2 nhằm xác định các yếu tố nguy cơ tim mạch và đề xuất các biện pháp can thiệp dự phòng hiệu quả.',
        'pub_3_year': '2021',
        'pub_3_title': 'So sánh hiệu quả và tính an toàn của hai phác đồ điều trị viêm phổi cộng đồng',
        'pub_3_authors': 'Nguyễn Văn A, Phạm Hoàng Anh, Trần Thị B',
        'pub_3_journal': 'Tạp chí Nghiên cứu Y học, 28(3), 45-52',
        'pub_3_abstract': 'Một nghiên cứu thử nghiệm lâm sàng ngẫu nhiên có đối chứng trên 80 bệnh nhân viêm phổi cộng đồng, so sánh hiệu quả và tính an toàn của hai phác đồ kháng sinh.',
        'view_more': 'Xem thêm',
        'download': 'Tải xuống',
        
        // Projects section
        'projects_title': 'Dự án nghiên cứu',
        'proj_1_title': 'Nghiên cứu đặc điểm lâm sàng và yếu tố nguy cơ của bệnh động mạch vành ở người trẻ tuổi',
        'proj_1_period': '2022 - 2023',
        'proj_1_role': 'Nghiên cứu viên chính',
        'proj_1_desc': 'Dự án nghiên cứu đa trung tâm với sự tham gia của 5 bệnh viện lớn tại Hà Nội, thu thập và phân tích dữ liệu từ 300 bệnh nhân dưới 40 tuổi mắc bệnh động mạch vành nhằm xác định các yếu tố nguy cơ đặc thù và đề xuất chiến lược dự phòng.',
        'proj_1_outcome_title': 'Kết quả đạt được:',
        'proj_1_outcome_1': 'Xác định được 3 yếu tố nguy cơ chính ở nhóm bệnh nhân trẻ',
        'proj_1_outcome_2': 'Đề xuất quy trình sàng lọc mới cho đối tượng có nguy cơ cao',
        'proj_1_outcome_3': 'Công bố 2 bài báo quốc tế và 1 hướng dẫn lâm sàng',
        'proj_2_title': 'Chương trình phòng chống tăng huyết áp tại cộng đồng',
        'proj_2_period': '2021 - Hiện tại',
        'proj_2_role': 'Trưởng nhóm y tế',
        'proj_2_desc': 'Dự án can thiệp cộng đồng nhằm tăng cường nhận thức và kiểm soát tăng huyết áp tại 3 xã thuộc huyện Đông Anh, Hà Nội. Chương trình bao gồm các hoạt động tập huấn cho cán bộ y tế cơ sở, khám sàng lọc cho người dân, và theo dõi điều trị cho bệnh nhân tăng huyết áp.',
        'proj_2_outcome_title': 'Kết quả đạt được:',
        'proj_2_outcome_1': 'Khám sàng lọc cho hơn 5000 người dân',
        'proj_2_outcome_2': 'Phát hiện và đưa vào quản lý 650 ca tăng huyết áp mới',
        'proj_2_outcome_3': 'Tăng tỷ lệ kiểm soát huyết áp tốt từ 25% lên 68% sau 1 năm',
        'proj_3_title': 'Đánh giá hiệu quả của liệu pháp miễn dịch trong điều trị bệnh viêm phổi nặng',
        'proj_3_period': '2020 - 2021',
        'proj_3_role': 'Thành viên nghiên cứu',
        'proj_3_desc': 'Dự án hợp tác quốc tế với Đại học Stanford (Hoa Kỳ) nghiên cứu hiệu quả của liệu pháp miễn dịch mới trong điều trị bệnh nhân viêm phổi nặng kháng kháng sinh. Thử nghiệm lâm sàng pha II được thực hiện trên 75 bệnh nhân.',
        'proj_3_outcome_title': 'Kết quả đạt được:',
        'proj_3_outcome_1': 'Giảm thời gian nằm viện trung bình 4.5 ngày',
        'proj_3_outcome_2': 'Giảm tỷ lệ tử vong từ 22% xuống 8%',
        'proj_3_outcome_3': 'Phát triển quy trình chẩn đoán sớm đặc hiệu',
        'view_details': 'Xem chi tiết',
        
        // Contact section
        'contact_title': 'Liên hệ',
        'contact_address_title': 'Địa chỉ',
        'contact_address': 'Phòng khám Hoàng Anh, 123 Đường Trần Duy Hưng, Cầu Giấy, Hà Nội',
        'contact_phone_title': 'Điện thoại',
        'contact_email_title': 'Email',
        'contact_hours_title': 'Giờ làm việc',
        'contact_hours': 'Thứ 2 - Thứ 6: 8:00 - 17:00<br>Thứ 7: 8:00 - 12:00',
        'contact_form_title': 'Đặt lịch hẹn',
        'contact_form_name': 'Họ và tên',
        'contact_form_email': 'Email',
        'contact_form_phone': 'Số điện thoại',
        'contact_form_reason': 'Lý do khám',
        'contact_form_submit': 'Gửi yêu cầu',
        
        // Footer
        'footer_links_title': 'Liên kết nhanh',
        'footer_social_title': 'Kết nối',
        'footer_copyright': '© 2025 BS. Phạm Hoàng Anh. Bản quyền thuộc về Hoàng Anh Medical.'
    },
    'en': {
        // Navigation
        'nav_home': 'Home',
        'nav_about': 'About',
        'nav_expertise': 'Expertise',
        'nav_education': 'Education',
        'nav_publications': 'Publications',
        'nav_projects': 'Research Projects',
        'nav_testimonials': 'Testimonials',
        'nav_contact': 'Contact',
        
        // Hero section
        'hero_title': 'DR. PHAM HOANG ANH',
        'hero_subtitle': 'Resident Doctor - Internal Medicine',
        'hero_text': 'Dedicated healthcare, effective treatment',
        'hero_btn': 'Book Appointment',
        
        // About section
        'about_title': 'About Me',
        'about_position': 'Resident Doctor - Central General Hospital',
        'about_p1': 'Hello! I am Pham Hoang Anh, currently a resident doctor specializing in Internal Medicine at the Central General Hospital. With a passion for medicine and a desire to provide the best healthcare for patients, I continuously learn and enhance my professional knowledge.',
        'about_p2': 'I believe that treatment is not just about curing diseases but also about accompanying, listening to, and understanding patients. Each patient is a special case and needs to be cared for with the most appropriate approach.',
        'stat_years': 'Years of Experience',
        'stat_patients': 'Patients Treated',
        'stat_awards': 'Awards',
        
        // Expertise section
        'expertise_title': 'Expertise',
        'expertise_1_title': 'Cardiology',
        'expertise_1_text': 'Diagnosis and treatment of cardiovascular diseases, hypertension, and cardiac arrhythmias.',
        'expertise_2_title': 'Respiratory Medicine',
        'expertise_2_text': 'Treatment of respiratory diseases, pneumonia, asthma, and COPD.',
        'expertise_3_title': 'Gastroenterology',
        'expertise_3_text': 'Diagnosis and treatment of gastrointestinal diseases, stomach, and colon.',
        'expertise_4_title': 'Neurology',
        'expertise_4_text': 'Treatment of neurological disorders, headaches, and sleep disorders.',
        
        // Education section
        'education_title': 'Education & Experience',
        'education_1_period': '2023 - Present',
        'education_1_degree': 'Resident Doctor',
        'education_1_school': 'Central General Hospital',
        'education_2_period': '2021 - 2023',
        'education_2_degree': 'Master of Medicine',
        'education_2_school': 'Hanoi Medical University',
        'education_3_period': '2020 - 2021',
        'education_3_degree': 'Medical Practice',
        'education_3_school': 'Bach Mai Hospital',
        'education_4_period': '2014 - 2020',
        'education_4_degree': 'Doctor of Medicine',
        'education_4_school': 'Hanoi Medical University',
        
        // Publications section
        'publications_title': 'Scientific Publications',
        'pub_1_year': '2023',
        'pub_1_title': 'Efficacy of New Treatment Method for Resistant Hypertension',
        'pub_1_authors': 'Pham Hoang Anh, Nguyen Van A, Tran Thi B',
        'pub_1_journal': 'Vietnam Journal of Medicine, 45(2), 78-85',
        'pub_1_abstract': 'A study evaluating the effectiveness of a new drug combination method in the treatment of resistant hypertension in 120 patients at the Central General Hospital.',
        'pub_2_year': '2022',
        'pub_2_title': 'Assessment of Cardiovascular Risk Factors in Type 2 Diabetes Patients',
        'pub_2_authors': 'Pham Hoang Anh, Le Van C, Do Thi D',
        'pub_2_journal': 'Practical Medicine, 32(4), 112-118',
        'pub_2_abstract': 'A cross-sectional study on 250 patients with type 2 diabetes to identify cardiovascular risk factors and propose effective preventive intervention measures.',
        'pub_3_year': '2021',
        'pub_3_title': 'Comparison of Efficacy and Safety of Two Treatment Regimens for Community-Acquired Pneumonia',
        'pub_3_authors': 'Nguyen Van A, Pham Hoang Anh, Tran Thi B',
        'pub_3_journal': 'Journal of Medical Research, 28(3), 45-52',
        'pub_3_abstract': 'A randomized controlled clinical trial on 80 patients with community-acquired pneumonia, comparing the efficacy and safety of two antibiotic regimens.',
        'view_more': 'View More',
        'download': 'Download',
        
        // Projects section
        'projects_title': 'Research Projects',
        'proj_1_title': 'Clinical Characteristics and Risk Factors for Coronary Artery Disease in Young Adults',
        'proj_1_period': '2022 - 2023',
        'proj_1_role': 'Principal Investigator',
        'proj_1_desc': 'Multi-center research project with the participation of 5 major hospitals in Hanoi, collecting and analyzing data from 300 patients under 40 years old with coronary artery disease to identify specific risk factors and propose prevention strategies.',
        'proj_1_outcome_title': 'Outcomes:',
        'proj_1_outcome_1': 'Identified 3 main risk factors in young patients',
        'proj_1_outcome_2': 'Proposed new screening protocol for high-risk individuals',
        'proj_1_outcome_3': 'Published 2 international papers and 1 clinical guideline',
        'proj_2_title': 'Community Hypertension Prevention Program',
        'proj_2_period': '2021 - Present',
        'proj_2_role': 'Medical Team Leader',
        'proj_2_desc': 'Community intervention project to increase awareness and control of hypertension in 3 communes in Dong Anh district, Hanoi. The program includes training activities for local health workers, screening examinations for residents, and treatment monitoring for hypertensive patients.',
        'proj_2_outcome_title': 'Outcomes:',
        'proj_2_outcome_1': 'Screened over 5000 residents',
        'proj_2_outcome_2': 'Detected and managed 650 new hypertension cases',
        'proj_2_outcome_3': 'Increased good blood pressure control rate from 25% to 68% after 1 year',
        'proj_3_title': 'Evaluation of Immunotherapy Efficacy in Treating Severe Pneumonia',
        'proj_3_period': '2020 - 2021',
        'proj_3_role': 'Research Member',
        'proj_3_desc': 'International collaborative project with Stanford University (USA) studying the effectiveness of new immunotherapy in treating patients with severe antibiotic-resistant pneumonia. Phase II clinical trial conducted on 75 patients.',
        'proj_3_outcome_title': 'Outcomes:',
        'proj_3_outcome_1': 'Reduced average hospital stay by 4.5 days',
        'proj_3_outcome_2': 'Decreased mortality rate from 22% to 8%',
        'proj_3_outcome_3': 'Developed specific early diagnostic protocol',
        'view_details': 'View Details',
        
        // Contact section
        'contact_title': 'Contact',
        'contact_address_title': 'Address',
        'contact_address': 'Hoang Anh Clinic, 123 Tran Duy Hung Street, Cau Giay, Hanoi',
        'contact_phone_title': 'Phone',
        'contact_email_title': 'Email',
        'contact_hours_title': 'Working Hours',
        'contact_hours': 'Monday - Friday: 8:00 - 17:00<br>Saturday: 8:00 - 12:00',
        'contact_form_title': 'Book an Appointment',
        'contact_form_name': 'Full Name',
        'contact_form_email': 'Email',
        'contact_form_phone': 'Phone Number',
        'contact_form_reason': 'Reason for Visit',
        'contact_form_submit': 'Submit Request',
        
        // Footer
        'footer_links_title': 'Quick Links',
        'footer_social_title': 'Connect',
        'footer_copyright': '© 2025 Dr. Pham Hoang Anh. All rights reserved by Hoang Anh Medical.'
    }
};

// Default language
let currentLanguage = 'vi';

// Function to change language
function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.language-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Update all text elements with translation
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (key.includes('_html')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Set initial language
    changeLanguage(currentLanguage);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});
