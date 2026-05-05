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
        'projects_tab_all': 'Tất cả',
        'projects_tab_clinical': 'Lâm sàng',
        'projects_tab_community': 'Cộng đồng',
        'projects_tab_collaborative': 'Hợp tác',
        'project_field_design': 'Thiết kế nghiên cứu',
        'project_field_collaborators': 'Cộng tác viên',
        'project_field_institution': 'Đơn vị chủ trì',
        'project_field_sample': 'Cỡ mẫu',
        'project_field_ethics': 'IRB/đạo đức',
        'project_field_registration': 'Đăng ký thử nghiệm',
        'project_field_protocol': 'Đề cương',
        'project_field_data': 'Dữ liệu/mã nguồn',
        'project_field_publications': 'Công bố liên quan',
        'project_outputs_title': 'Đầu ra / ghi chú thận trọng:',
        'proj_protocol_request': 'Cung cấp theo yêu cầu hợp tác',
        'proj_1_label': 'Nghiên cứu lâm sàng',
        'proj_1_title': 'Đặc điểm lâm sàng và yếu tố liên quan của bệnh động mạch vành ở người trẻ',
        'proj_1_period': '01/2022 - 12/2023',
        'proj_1_role': 'Nghiên cứu viên chính',
        'proj_1_status': 'Hoàn thành phân tích mô tả',
        'proj_1_desc': 'Nghiên cứu mô tả hồi cứu đa trung tâm nhằm mô tả hồ sơ lâm sàng và các yếu tố liên quan được ghi nhận trong hồ sơ bệnh án của người bệnh dưới 45 tuổi được chẩn đoán bệnh động mạch vành; nghiên cứu không khẳng định quan hệ nhân quả hoặc hiệu quả sàng lọc.',
        'proj_1_design': 'Mô tả hồi cứu, đa trung tâm',
        'proj_1_collaborators': 'Khoa Tim mạch và phòng Kế hoạch tổng hợp tại các điểm nghiên cứu',
        'proj_1_institution': 'Bệnh viện Đa khoa Trung ương',
        'proj_1_sample': '300 hồ sơ bệnh án đủ tiêu chí đưa vào phân tích',
        'proj_1_ethics': 'Đang cập nhật số quyết định phê duyệt; chỉ sử dụng dữ liệu đã khử định danh',
        'proj_1_registration': 'Không áp dụng cho nghiên cứu quan sát hồi cứu',
        'proj_1_data': 'Không công khai do dữ liệu bệnh án; có thể chia sẻ bảng biến đã khử định danh sau phê duyệt',
        'proj_1_publications': 'Bản thảo đang chuẩn bị; xem mục Công bố khoa học',
        'proj_1_output_1': 'Bộ dữ liệu phân tích mô tả các đặc điểm lâm sàng, xét nghiệm và can thiệp được ghi nhận trong hồ sơ.',
        'proj_1_output_2': 'Báo cáo nội bộ về các yếu tố liên quan trong mẫu nghiên cứu; kết quả cần được kiểm định ở đoàn hệ độc lập trước khi áp dụng sàng lọc.',
        'proj_1_output_3': 'Bối cảnh chuyên môn tham khảo hướng dẫn bệnh mạch vành mạn tính của ESC:',
        'proj_2_label': 'Dự án cộng đồng',
        'proj_2_title': 'Chương trình phát hiện và quản lý tăng huyết áp tại cộng đồng',
        'proj_2_period': '06/2021 - đang triển khai',
        'proj_2_role': 'Trưởng nhóm y tế',
        'proj_2_status': 'Đang theo dõi',
        'proj_2_desc': 'Dự án can thiệp cải tiến chất lượng tại cộng đồng, tập trung đo huyết áp chuẩn hóa, tư vấn nguy cơ và kết nối người dân có trị số huyết áp cao với cơ sở y tế; các số liệu là chỉ báo chương trình, không phải bằng chứng nhân quả về giảm biến cố tim mạch.',
        'proj_2_design': 'Can thiệp cộng đồng, theo dõi chỉ số trước-sau không ngẫu nhiên',
        'proj_2_collaborators': 'Trạm y tế xã, cộng tác viên y tế thôn bản và nhóm điều dưỡng tình nguyện',
        'proj_2_institution': 'Trung tâm Y tế huyện Đông Anh và Bệnh viện Đa khoa Trung ương',
        'proj_2_sample': 'Hơn 5.000 lượt đo huyết áp cộng đồng; 650 trường hợp được khuyến nghị đánh giá tiếp',
        'proj_2_ethics': 'Hoạt động y tế cộng đồng; quy trình đồng ý và bảo mật dữ liệu đang được chuẩn hóa',
        'proj_2_registration': 'Không đăng ký thử nghiệm lâm sàng vì không phân bổ can thiệp điều trị',
        'proj_2_protocol': 'Tham chiếu kỹ thuật WHO HEARTS',
        'proj_2_data': 'Bảng tổng hợp chỉ số chương trình; dữ liệu cá nhân không công khai',
        'proj_2_publications': 'Chưa có công bố bình duyệt; báo cáo địa phương đang được tổng hợp',
        'proj_2_output_1': 'Sổ tay quy trình đo huyết áp, tư vấn lối sống và chuyển tuyến cho cộng tác viên y tế.',
        'proj_2_output_2': 'Báo cáo theo dõi tỷ lệ người dân được tư vấn và liên kết chăm sóc; không diễn giải là giảm nguy cơ hay giảm tử vong.',
        'proj_2_output_3': 'Tài liệu nền về quản lý tăng huyết áp dựa trên gói kỹ thuật WHO HEARTS:',
        'proj_3_label': 'Hợp tác nghiên cứu',
        'proj_3_title': 'Theo dõi đáp ứng miễn dịch ở người bệnh viêm phổi nặng',
        'proj_3_period': '03/2020 - 12/2021',
        'proj_3_role': 'Thành viên nghiên cứu',
        'proj_3_status': 'Hoàn thành thu thập dữ liệu',
        'proj_3_desc': 'Nghiên cứu hợp tác quan sát trên người bệnh viêm phổi nặng nhằm mô tả diễn biến dấu ấn miễn dịch và kết cục lâm sàng trong điều trị thường quy; không trình bày như thử nghiệm chứng minh liệu pháp mới làm giảm thời gian nằm viện hay tử vong.',
        'proj_3_design': 'Đoàn hệ quan sát tiến cứu, phân tích dấu ấn sinh học',
        'proj_3_collaborators': 'Khoa Hồi sức tích cực, khoa Hô hấp và đối tác học thuật quốc tế',
        'proj_3_institution': 'Bệnh viện Đa khoa Trung ương',
        'proj_3_sample': '75 người bệnh đủ tiêu chí theo dõi',
        'proj_3_ethics': 'Số phê duyệt không hiển thị công khai; người bệnh/đại diện được lấy đồng ý theo quy trình nghiên cứu',
        'proj_3_registration': 'Không đăng ký là thử nghiệm can thiệp; xem ClinicalTrials.gov để tra cứu thử nghiệm liên quan',
        'proj_3_data': 'Dữ liệu nhạy cảm không công khai; mã phân tích có thể chia sẻ sau khi loại bỏ thông tin định danh và ký thỏa thuận',
        'proj_3_publications': 'Bản thảo kết quả dấu ấn miễn dịch đang chuẩn bị',
        'proj_3_output_1': 'Bộ biến số theo dõi diễn biến viêm, hỗ trợ mô tả quỹ đạo lâm sàng trong chăm sóc thường quy.',
        'proj_3_output_2': 'Báo cáo kết quả nhấn mạnh tính thăm dò; không suy luận hiệu quả điều trị khi chưa có thiết kế ngẫu nhiên đối chứng.',
        'proj_3_output_3': 'Bối cảnh phân loại viêm phổi nặng tham khảo hướng dẫn ATS/IDSA:',
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
        'projects_tab_all': 'All',
        'projects_tab_clinical': 'Clinical',
        'projects_tab_community': 'Community',
        'projects_tab_collaborative': 'Collaborative',
        'project_field_design': 'Study design',
        'project_field_collaborators': 'Collaborators',
        'project_field_institution': 'Lead institution',
        'project_field_sample': 'Sample size',
        'project_field_ethics': 'IRB/ethics',
        'project_field_registration': 'Trial registration',
        'project_field_protocol': 'Protocol',
        'project_field_data': 'Dataset/code',
        'project_field_publications': 'Related publications',
        'project_outputs_title': 'Outputs / scoped notes:',
        'proj_protocol_request': 'Available on collaboration request',
        'proj_1_label': 'Clinical research',
        'proj_1_title': 'Clinical Characteristics and Associated Factors of Coronary Artery Disease in Young Adults',
        'proj_1_period': 'Jan 2022 - Dec 2023',
        'proj_1_role': 'Principal Investigator',
        'proj_1_status': 'Descriptive analysis completed',
        'proj_1_desc': 'A multicenter retrospective descriptive study to characterize clinical profiles and chart-documented associated factors among patients younger than 45 years diagnosed with coronary artery disease; the study does not claim causality or screening effectiveness.',
        'proj_1_design': 'Retrospective descriptive, multicenter',
        'proj_1_collaborators': 'Cardiology departments and planning offices at participating sites',
        'proj_1_institution': 'Central General Hospital',
        'proj_1_sample': '300 eligible medical records included in the analysis',
        'proj_1_ethics': 'Approval number being updated; only de-identified data are used',
        'proj_1_registration': 'Not applicable to a retrospective observational study',
        'proj_1_data': 'Not public because source data are medical records; a de-identified variable table may be shared after approval',
        'proj_1_publications': 'Manuscript in preparation; see the Scientific Publications section',
        'proj_1_output_1': 'Descriptive analysis dataset of clinical, laboratory, and intervention characteristics documented in records.',
        'proj_1_output_2': 'Internal report on associated factors in the study sample; findings require validation in an independent cohort before screening use.',
        'proj_1_output_3': 'Clinical context references the ESC chronic coronary syndromes guideline:',
        'proj_2_label': 'Community project',
        'proj_2_title': 'Community Hypertension Detection and Management Program',
        'proj_2_period': 'Jun 2021 - ongoing',
        'proj_2_role': 'Medical Team Leader',
        'proj_2_status': 'Follow-up ongoing',
        'proj_2_desc': 'A community quality-improvement intervention focused on standardized blood pressure measurement, risk counseling, and referral linkage for residents with elevated readings; figures are program indicators, not causal evidence of reduced cardiovascular events.',
        'proj_2_design': 'Community intervention with non-randomized before-after indicator tracking',
        'proj_2_collaborators': 'Commune health stations, village health collaborators, and volunteer nursing teams',
        'proj_2_institution': 'Dong Anh District Health Center and Central General Hospital',
        'proj_2_sample': 'More than 5,000 community blood pressure measurements; 650 people recommended for further evaluation',
        'proj_2_ethics': 'Community health activity; consent and data protection workflows are being standardized',
        'proj_2_registration': 'No clinical trial registration because treatment allocation is not assigned',
        'proj_2_protocol': 'WHO HEARTS technical reference',
        'proj_2_data': 'Aggregated program indicators; individual-level data are not public',
        'proj_2_publications': 'No peer-reviewed publication yet; local report is being compiled',
        'proj_2_output_1': 'Procedure manual for blood pressure measurement, lifestyle counseling, and referral by health collaborators.',
        'proj_2_output_2': 'Monitoring report on counseling and care-linkage rates; not interpreted as risk or mortality reduction.',
        'proj_2_output_3': 'Background material on hypertension management based on the WHO HEARTS technical package:',
        'proj_3_label': 'Research collaboration',
        'proj_3_title': 'Immune Response Monitoring in Severe Pneumonia Patients',
        'proj_3_period': 'Mar 2020 - Dec 2021',
        'proj_3_role': 'Research Member',
        'proj_3_status': 'Data collection completed',
        'proj_3_desc': 'A collaborative observational study of severe pneumonia patients describing immune-marker trajectories and clinical outcomes during usual care; it is not presented as a trial proving that a new therapy reduces length of stay or mortality.',
        'proj_3_design': 'Prospective observational cohort with biomarker analysis',
        'proj_3_collaborators': 'Intensive care, respiratory medicine, and international academic partners',
        'proj_3_institution': 'Central General Hospital',
        'proj_3_sample': '75 eligible patients followed',
        'proj_3_ethics': 'Approval number not displayed publicly; patient/representative consent obtained per research workflow',
        'proj_3_registration': 'Not registered as an interventional trial; see ClinicalTrials.gov for related trials',
        'proj_3_data': 'Sensitive data are not public; analysis code may be shared after de-identification and data-use agreement',
        'proj_3_publications': 'Immune-marker results manuscript in preparation',
        'proj_3_output_1': 'Variable set tracking inflammatory trajectories to support descriptive analysis of usual-care clinical courses.',
        'proj_3_output_2': 'Results report emphasizes exploratory interpretation; no treatment-effect inference without a randomized controlled design.',
        'proj_3_output_3': 'Severe pneumonia classification context references the ATS/IDSA guideline:',
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
