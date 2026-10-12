import os
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image as RLImage, PageBreak, Table, TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT, TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from PIL import Image as PILImage

# Register Arial and Calibri
try:
    pdfmetrics.registerFont(TTFont('Arial', r'C:\Windows\Fonts\arial.ttf'))
    pdfmetrics.registerFont(TTFont('Arial-Bold', r'C:\Windows\Fonts\arialbd.ttf'))
    pdfmetrics.registerFont(TTFont('Calibri', r'C:\Windows\Fonts\calibri.ttf'))
    pdfmetrics.registerFont(TTFont('Calibri-Bold', r'C:\Windows\Fonts\calibrib.ttf'))
    pdfmetrics.registerFont(TTFont('Calibri-Italic', r'C:\Windows\Fonts\calibrii.ttf'))
    FONT_BODY = 'Calibri'
    FONT_BOLD = 'Calibri-Bold'
    FONT_ITALIC = 'Calibri-Italic'
    FONT_HEADER = 'Arial'
    FONT_HEADER_BOLD = 'Arial-Bold'
except Exception as e:
    print("Fallback to standard fonts:", e)
    FONT_BODY = 'Helvetica'
    FONT_BOLD = 'Helvetica-Bold'
    FONT_ITALIC = 'Helvetica-Oblique'
    FONT_HEADER = 'Helvetica'
    FONT_HEADER_BOLD = 'Helvetica-Bold'

RED_COLOR = colors.HexColor('#d32f2f') # Clean crimson red
TEXT_COLOR = colors.HexColor('#1a1a1a')

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_header()
            super().showPage()
        super().save()

    def draw_header(self):
        self.saveState()
        self.setFont(FONT_HEADER, 10)
        self.setFillColor(colors.HexColor('#222222'))
        # Top running header: Alejandrino, Dean       RIZLIFE       TASK 2
        # A4 width = 595.27, margins = 54 left, 54 right
        self.drawString(54, 792, "Alejandrino, Dean")
        self.drawCentredString(297.6, 792, "RIZLIFE")
        self.drawRightString(541.27, 792, "TASK 2")
        self.restoreState()

def create_fraction_table(label, num_text, denom_text, width=280):
    # Fraction layout
    style_label = ParagraphStyle('FL', fontName=FONT_ITALIC, fontSize=11, leading=14, alignment=TA_RIGHT)
    style_num = ParagraphStyle('FN', fontName=FONT_ITALIC, fontSize=11, leading=13, alignment=TA_CENTER)
    style_den = ParagraphStyle('FD', fontName=FONT_ITALIC, fontSize=11, leading=13, alignment=TA_CENTER)
    
    col1_w = 70
    col2_w = width - col1_w
    
    data = [
        [Paragraph(label, style_label), Paragraph(num_text, style_num)],
        ['', Paragraph(denom_text, style_den)]
    ]
    t = Table(data, colWidths=[col1_w, col2_w])
    t.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 2),
        ('TOPPADDING', (0, 0), (-1, -1), 2),
        ('LINEBELOW', (1, 0), (1, 0), 0.75, colors.HexColor('#333333')),
        ('ALIGN', (0, 0), (0, 1), 'RIGHT'),
        ('ALIGN', (1, 0), (1, 1), 'CENTER'),
    ]))
    return t

def generate_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=54,
        rightMargin=54,
        topMargin=68,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    title_style = ParagraphStyle(
        'MainTitle',
        fontName=FONT_BOLD,
        fontSize=12,
        leading=16,
        textColor=RED_COLOR,
        alignment=TA_CENTER,
        spaceAfter=18
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        fontName=FONT_BOLD,
        fontSize=11,
        leading=15,
        textColor=TEXT_COLOR,
        spaceBefore=10,
        spaceAfter=6
    )

    body_bold = ParagraphStyle(
        'BodyBold',
        fontName=FONT_BOLD,
        fontSize=11,
        leading=15,
        textColor=TEXT_COLOR
    )

    body_text = ParagraphStyle(
        'BodyTextCustom',
        fontName=FONT_BODY,
        fontSize=11,
        leading=15.5,
        textColor=TEXT_COLOR,
        alignment=TA_JUSTIFY,
        spaceAfter=10
    )

    body_left = ParagraphStyle(
        'BodyLeft',
        fontName=FONT_BODY,
        fontSize=11,
        leading=15,
        textColor=TEXT_COLOR
    )

    formula_line = ParagraphStyle(
        'FormulaLine',
        fontName=FONT_ITALIC,
        fontSize=11,
        leading=15,
        textColor=TEXT_COLOR,
        alignment=TA_CENTER
    )

    formula_res = ParagraphStyle(
        'FormulaRes',
        fontName=FONT_BODY,
        fontSize=11,
        leading=15,
        textColor=TEXT_COLOR,
        alignment=TA_CENTER
    )

    red_subheading = ParagraphStyle(
        'RedSubheading',
        fontName=FONT_BOLD,
        fontSize=11.5,
        leading=15,
        textColor=RED_COLOR,
        spaceBefore=12,
        spaceAfter=6
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        fontName=FONT_BODY,
        fontSize=10.5,
        leading=15,
        textColor=TEXT_COLOR,
        alignment=TA_JUSTIFY,
        leftIndent=18,
        firstLineIndent=-12,
        spaceAfter=8
    )

    story = []

    # ================= PAGE 1 =================
    story.append(Paragraph("Task 2: Testing the Implementation of the Rizal Law", title_style))
    story.append(Spacer(1, 10))

    # A. APC Library
    story.append(Paragraph("<b>A. APC Library</b>", section_heading))
    story.append(Paragraph("Total number of Rizal-related books available: 147", body_left))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Total Student Population: 650", body_left))
    story.append(Spacer(1, 10))
    story.append(Paragraph("Ratio Computation:", body_left))
    story.append(Spacer(1, 6))

    # Ratio formula 1
    t1 = create_fraction_table("<i>Ratio</i> =", "Number of Rizal resources", "Number of student", width=220)
    # Centering the table
    t1_outer = Table([[t1]], colWidths=[487.27])
    t1_outer.setStyle(TableStyle([('ALIGN', (0,0), (-1,-1), 'CENTER'), ('VALIGN', (0,0), (-1,-1), 'MIDDLE')]))
    story.append(t1_outer)
    story.append(Spacer(1, 6))

    t2 = create_fraction_table("<i>Ratio</i> =", "147", "650", width=120)
    t2_outer = Table([[t2]], colWidths=[487.27])
    t2_outer.setStyle(TableStyle([('ALIGN', (0,0), (-1,-1), 'CENTER'), ('VALIGN', (0,0), (-1,-1), 'MIDDLE')]))
    story.append(t2_outer)
    story.append(Spacer(1, 6))

    story.append(Paragraph("<i>Ratio</i> = 0.226", formula_line))
    story.append(Spacer(1, 3))
    story.append(Paragraph("147 : 650", formula_res))
    story.append(Spacer(1, 20))

    # B. Barangay Hall
    story.append(Paragraph("<b>B. Barangay Hall</b>", section_heading))
    story.append(Paragraph("Location: Barangay Magallanes (Makati City, Metro Manila)", body_left))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Total number of Rizal-related books available: 0", body_left))
    story.append(Spacer(1, 2))
    story.append(Paragraph("Total Population: 5744", body_left))
    story.append(Spacer(1, 10))
    story.append(Paragraph("Ratio Computation:", body_left))
    story.append(Spacer(1, 6))

    # Ratio formula 2
    tb1 = create_fraction_table("<i>Ratio</i> =", "Number of Rizal books", "Barangay population", width=220)
    tb1_outer = Table([[tb1]], colWidths=[487.27])
    tb1_outer.setStyle(TableStyle([('ALIGN', (0,0), (-1,-1), 'CENTER'), ('VALIGN', (0,0), (-1,-1), 'MIDDLE')]))
    story.append(tb1_outer)
    story.append(Spacer(1, 6))

    tb2 = create_fraction_table("<i>Ratio</i> =", "0", "5744", width=120)
    tb2_outer = Table([[tb2]], colWidths=[487.27])
    tb2_outer.setStyle(TableStyle([('ALIGN', (0,0), (-1,-1), 'CENTER'), ('VALIGN', (0,0), (-1,-1), 'MIDDLE')]))
    story.append(tb2_outer)
    story.append(Spacer(1, 6))

    story.append(Paragraph("<i>Ratio</i> = 0", formula_line))
    story.append(Spacer(1, 3))
    story.append(Paragraph("0 : 5744", formula_res))

    # ================= PAGE 2 =================
    story.append(PageBreak())
    story.append(Paragraph("Reflection and Summary of Findings", title_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("Findings", red_subheading))

    p_findings_1 = (
        "An on-site audit of the Asia Pacific College (APC) Library was conducted to examine the institutional availability of materials dedicated to the life, works, and nationalistic contributions of Dr. Jose Rizal. Across physical volumes, specialized monographs, academic journals, and integrated multimedia references, a total of 147 Rizal-related resources were cataloged and confirmed accessible for student borrowing, excluding unreturned or missing materials. Relative to the current enrolled student population of 650, the computed ratio stands at 147:650 (0.226). This translates to approximately 23 Rizal resources for every 100 students. The metric reflects an earnest compliance with the foundational mandates of Republic Act No. 1425 (The Rizal Law) within higher education. The library offers a well-curated cross-section of primary texts, critical commentaries, and audiovisual media. Nonetheless, the proportional ratio underscores critical resource limitations during peak academic cycles. During midterm reviews, major historical research deadlines, and collaborative term projects, concurrent student demand severely strains the collection, resulting in immediate resource deficits for students requiring physical texts simultaneously."
    )
    story.append(Paragraph(p_findings_1, body_text))

    p_findings_2 = (
        "In contrast, the field investigation and personnel interview carried out at Barangay Magallanes, Makati City demonstrated a total absence of publicly accessible Rizal publications. With an official local population of 5,744 residents, the computed availability ratio is 0:5744 (0.000), denoting zero Rizal materials available for community reading. Consultations with barangay personnel highlighted several structural reasons for this outcome. The Magallanes Barangay Hall functions strictly as an executive and civil administration center, directing its operational space and budget toward public health services, disaster risk reduction, civil registries, and dispute mediation via the Lupon Tagapamayapa. The administrative complex does not house a community library, reading center, or public book archive. Furthermore, given that Barangay Magallanes is an established residential village and commercial hub, constituents predominantly rely on personal internet access and private academic institutions for research materials. Consequently, local demand for public physical reading rooms is virtually non-existent, and municipal community education remains centered on early childhood daycare and senior citizen welfare rather than collegiate historical literature."
    )
    story.append(Paragraph(p_findings_2, body_text))

    story.append(Paragraph("Conclusion", red_subheading))
    p_conclusion_1 = (
        "The comparative findings underscore a stark divergence in how Republic Act No. 1425 is implemented depending on institutional mission and community infrastructure. Higher education institutions, such as Asia Pacific College, maintain an explicit curriculum-driven mandate to preserve both printed and electronic Rizal collections, actively supporting classroom instruction and pedagogical discourse. Although the computed ratio of 147:650 (0.226) demonstrates that resources can become constrained under heavy academic load, students are nonetheless afforded organized, institutional pathways to encounter Rizal's unexpurgated novels, essays, and biographical accounts. In sharp contrast, the"
    )
    story.append(Paragraph(p_conclusion_1, body_text))

    # ================= PAGE 3 =================
    story.append(PageBreak())

    p_conclusion_2 = (
        "barangay's ratio of 0:5744 (0.000) exposes a profound structural gap in public accessibility outside formal academic walls. Although the local government unit has justifiable operational priorities rooted in frontline public service and emergency preparedness, the complete non-existence of community-level Rizal resources restricts public engagement with national history. While RA 1425 was originally enacted to foster patriotism, civic responsibility, and national consciousness across the entire citizenry, its real-world implementation remains largely confined to accredited school libraries. Once individuals exit formal education, access to tangible historical literature in civic spaces vanishes almost entirely. This disparity confirms that while academic institutions satisfy the letter of the Rizal Law, broader grassroots civic initiatives are urgently needed to keep Rizal's ideals alive within local communities."
    )
    story.append(Paragraph(p_conclusion_2, body_text))
    story.append(Spacer(1, 10))

    story.append(Paragraph("Recommendation", red_subheading))

    rec_1 = (
        "<b>• Institutional Multi-Access & Digital Licenses:</b> Expand APC Library's Rizal holdings by procuring concurrent-user digital licenses, multi-seat e-books, and digitized primary documents. This strategy eliminates physical borrowing bottlenecks during peak examination periods and guarantees continuous remote access for hybrid learners."
    )
    rec_2 = (
        "<b>• Community Reading Kiosks in the Barangay Hall:</b> Establish a dedicated civic reading corner or educational reference shelf within Barangay Magallanes Hall, furnished with essential Philippine history volumes, copies of <i>Noli Me Tangere</i> and <i>El Filibusterismo</i>, and civic primers accessible to residents and staff."
    )
    rec_3 = (
        "<b>• Sangguniang Kabataan (SK) Historical Literacy Initiatives:</b> Mobilize the Sangguniang Kabataan of Barangay Magallanes to sponsor grassroots cultural campaigns, book drives, historical webinars, and interactive exhibits commemorating Rizal’s life, transforming civic youth programs into active avenues of patriotism."
    )
    rec_4 = (
        "<b>• Institutional & Municipal Library Linkages:</b> Create collaborative partnerships between Barangay Magallanes, nearby academic institutions, and the Makati City Public Library system to facilitate mobile library visits and shared digital archives, thereby democratizing historical knowledge for the general public."
    )
    story.append(Paragraph(rec_1, bullet_style))
    story.append(Paragraph(rec_2, bullet_style))
    story.append(Paragraph(rec_3, bullet_style))
    story.append(Paragraph(rec_4, bullet_style))

    # ================= PAGE 4 =================
    story.append(PageBreak())
    story.append(Paragraph("Appendix", title_style))
    story.append(Spacer(1, 4))

    # Image 2 is Library (as user stated: "2nd image is library")
    img_lib_path = r"C:\Users\Dean Alejandrino\.gemini\antigravity\brain\88568000-7aca-4dd2-a70d-cf40a987b064\.user_uploaded\media_1791532931654_758c4627.jpg"
    # Image 1 is Barangay (as user stated: "1st image is the baragay")
    img_brgy_path = r"C:\Users\Dean Alejandrino\.gemini\antigravity\brain\88568000-7aca-4dd2-a70d-cf40a987b064\.user_uploaded\media_1791532931650_1ce46cde.jpg"

    # Let's scale images: available width is 487 pt. Both images are 1024x768 (ratio 4:3 = 1.333)
    # Target display width = 330 pt, height = 247.5 pt
    img_w = 320
    img_h = 240

    story.append(Paragraph("<b>A. APC Library</b>", section_heading))
    story.append(Spacer(1, 4))
    if os.path.exists(img_lib_path):
        rl_img1 = RLImage(img_lib_path, width=img_w, height=img_h)
        t_img1 = Table([[rl_img1]], colWidths=[487.27])
        t_img1.setStyle(TableStyle([('ALIGN', (0,0), (-1,-1), 'CENTER')]))
        story.append(t_img1)

    story.append(Spacer(1, 10))
    story.append(Paragraph("<b>B. Barangay Hall</b>", section_heading))
    story.append(Spacer(1, 4))
    if os.path.exists(img_brgy_path):
        rl_img2 = RLImage(img_brgy_path, width=img_w, height=img_h)
        t_img2 = Table([[rl_img2]], colWidths=[487.27])
        t_img2.setStyle(TableStyle([('ALIGN', (0,0), (-1,-1), 'CENTER')]))
        story.append(t_img2)

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF build complete:", output_path)

if __name__ == "__main__":
    out_pdf = r"C:\Users\Dean Alejandrino\Downloads\RIZLIFE_TASK2_ALEJANDRINO.pdf"
    generate_pdf(out_pdf)
