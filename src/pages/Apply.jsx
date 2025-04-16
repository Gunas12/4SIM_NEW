import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../pages/home_sections/Apply.css";

const ApplyForm = () => {
  const [step, setStep] = useState(1);
  const{t}=useTranslation();
  const [formData, setFormData] = useState({
    companyName: "",
    registrationNumber: "",
    yearsOfEstablishment: "",
    address: "",
    city: "",
    contactPerson: "",
    phone: "",
    companyType: "",
    localOwnership: "",
    shareholders: "",
    industrySector: "",
    productsServices: "",
    exportActivity: "No",
    exportRatio: "",
    exportMarkets: "",
    employees: "",
    turnover: "",
    digitalLevel: "1",
    digitalTools: [],
    digitalChallenges: [],
    digitalGoals: "",
    digitalLeader: "No",
    digitalStrategy: "No",
    executiveCommitment: "No",
    financialAssistance: "No",
    estimatedBudget: "",
    registrationCert: null,
    financialStatements: null,
    digitalPlans: null,
    consentInfoAccurate: false,
    consentContact: false,
    keyChallenges: [],
  });
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  const [files, setFiles] = useState({
    companyRegistration: null,
    financialStatements: null,
    digitalTransformationPlans: null,
  });
  const [checkboxes, setCheckboxes] = useState({
    confirmInfo: false,
    consentContact: false,
  });
  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fieldName]: file,
    }));
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="apply-form">
        {step === 1 && (
          <div className="form-div">
            <h2 className="industry">{t('Company Information')}</h2>
            <label>{t('Company Name(Full legal name)')}</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />

            <label>{t('Company Registration Number')}</label>
            <input
              type="text"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              required
            />

            <label>{t('Years of Establishment')}</label>
            <select
              name="yearsOfEstablishment"
              value={formData.yearsOfEstablishment}
              onChange={handleChange}
              required
              className="select"
            >
              <option value=""></option>
              {Array.from({ length: 100 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
            <label>{t('Company Address')}</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <label>{t('City/Region')}</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <label>{t('Website (if applicable)')}</label>
            <input
              type="text"
              name="website"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <label>{t('Primary Contact Person')}</label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleChange}
              required
            />

            <label>{t('Contact Email')}</label>
            <input
              type="text"
              name="contactEmail"
              value={formData.phone}
              onChange={handleChange}
              required
            />      
            <label>{t('Phone Number')}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <button type="button" onClick={nextStep} className="next">
              {t('Next')}
            </button>
          </div>
        )}

{step === 2 && (
  <div className="form-div">
            <h2 className="industry">{t('Ownership & Legal structure')}</h2>
    <label>{t('Company type(LLC, JSC, Individual Entrepreneur, etc.)')}</label>
    <input
      type="text"
      name="companyName"
      value={formData.companyName}
      onChange={handleChange}
      required
    />

    <label>{t('Percentage of Local Ownership: %')}</label>
    <input
      type="range"
      name="localOwnership"
      min="0"
      max="100"
      step="1"
      value={formData.localOwnership}
      onChange={handleChange}
      required
    />

    <label>{t('Company shareholders (Optional)')}</label>
    <input
      type="text"
      name="stakeholders"
      value={formData.yearsOfEstablishment}
      onChange={handleChange}
      required
    />

    <div>
      <h2 className="industry">{t('Industry & Business operations')}</h2>
      <label>{t('Industry sector')}</label>
      <select
        name="industrySector"
        value={formData.industrySector}
        onChange={handleChange}
        required
        className="select"

      >
        <option value="">{t('')}</option>
        <option value="">{t('Food & beverages')}</option>
        <option value="IT">{t('Refined petroleum products')}</option>
        <option value="Manufacturing">{t('Chemicals')}</option>
        <option value="Finance">{t('Other non-metallic mineral products')}</option>
        <option value="Retail">{t('Basic metals')}</option>
        <option value="Healthcare">{t('Repair and installation of machinery and equipment')}</option>
        <option value="Education">{t('Rubber & plastic Products')}</option>
        <option value="Other">{t('Textiles')}</option>
        <option value="Other">{t('Machinery & equipment')}</option>
        <option value="Other">{t('Electrical equipment')}</option>
      </select>

      <label>{t('Main products/ services')}</label>
      <input
        type="text"
        name="registrationNumber"
        value={formData.registrationNumber}
        onChange={handleChange}
        required
      />

      <label>{t('Export Activity')}</label>
      <div
        style={{ display: 'flex', gap: '15px', alignItems: 'center' }}
      >
        <label>
          <input
            type="checkbox"
            name="exportActivity"
            checked={formData.exportActivity === 'Yes'}
            onChange={() =>
              handleChange({
                target: {
                  name: 'exportActivity',
                  value: formData.exportActivity === 'Yes' ? '' : 'Yes',
                },
              })
            }
          />
          {t('Yes')}
        </label>

        <label>
          <input
            type="checkbox"
            name="exportActivity"
            checked={formData.exportActivity === 'No'}
            onChange={() =>
              handleChange({
                target: {
                  name: 'exportActivity',
                  value: formData.exportActivity === 'No' ? '' : 'No',
                },
              })
            }
          />
          {t('No')}
        </label>
      </div>

      {/* yes olsa görünəcək hissə */}
      {formData.exportActivity === 'Yes' && (
        <>
          <label>{t('Export Ratio (%)')}</label>
          <input
            type="range"
            name="exportRatio"
            value={formData.exportRatio}
            onChange={handleChange}
            min="0"
            max="100"
            step="1"
          />
          <span>{formData.exportRatio}%</span>
        </>
      )}

      <label>{t('Key Export Markets(If applicable)')}</label>
      <input
        type="text"
        name="exportMarkets"
        value={formData.exportMarkets}
        onChange={handleChange}
        required
      />
    </div>
    <button type="button" onClick={nextStep} className="next">
      {t('Next')}
    </button>
  </div>
)}


{step === 3 && (
  <div className="form-div">
    <h2 className="industry">{t('Company size')}</h2>

    <div style={{ display: 'flex' }} className="company-size-container">
      <div>
        <label className="annual-label">{t('Number of full-time employees')}</label>
        <select
          name="fullTimeEmployees"
          value={formData.fullTimeEmployees}
          onChange={handleChange}
          required
          className="select"
        >
          <option value="">{t('')}</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-250">51-250</option>
          <option value="250+">250+</option>
        </select>
      </div>

      <div>
        <label className="annual-label">{t('Annual turnover (AZN)')}</label>
        <select
          name="annualTurnover"
          value={formData.annualTurnover}
          onChange={handleChange}
          required
          className="select"
        >
          <option value="">{t('')}</option>
          <option value="Up to 3M">{t('Up to 3M')}</option>
          <option value="3M-30M">{t('3M-30M')}</option>
          <option value="30M+">{t('30M+')}</option>
        </select>
      </div>
    </div>

    <h2 className="industry">{t('Digital Readiness & Transformation Needs')}</h2>

    <div style={{ display: 'flex' }} className="company-size-container">
      <div>
        <label>{t('Current level of digitalization')}</label>
        <select
          name="digitalizationLevel"
          value={formData.digitalizationLevel}
          onChange={handleChange}
          required
          className="select"
        >
          <option value="">{t('')}</option>
          <option value="1">{t('1 = No digital tool used')}</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">{t('5 = Fully digital & automated processes')}</option>
        </select>
      </div>

      <div>
        <label>{t('Existing digital tools in use')}</label>
        <select
          name="digitalTools"
          value={formData.digitalTools}
          onChange={handleChange}
          required
          className="select"
        >
          <option value="">{t('')}</option>
          <option value="ERP">ERP</option>
          <option value="CRM">CRM</option>
          <option value="Cloud">Cloud</option>
          <option value="IoT">IoT</option>
          <option value="AI">AI</option>
          <option value="Other">{t('Other')}</option>
        </select>
      </div>
    </div>

    <label>{t('Key challenges in digital transformation')}</label>
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
      className="checkbox"
    >
      {[
        t('Lack of budget'),
        t('Lack of technical expertise'),
        t('Need for training'),
        t('Lack of digital strategy'),
        t('Infrastructure limitations'),
      ].map((challenge) => (
        <label key={challenge}>
          <input
            type="checkbox"
            name="keyChallenges"
            value={challenge}
            checked={formData.keyChallenges.includes(challenge)}
            onChange={handleCheckboxChange}
            className="key-checkbox"
          />
          {challenge}
        </label>
      ))}
    </div>

    <label>{t("What are your company’s main digital transformation goals? (Short answer)")}</label>
    <input
      type="text"
      name="transformationGoals"
      value={formData.transformationGoals}
      onChange={handleChange}
      required
    />

    <button type="button" onClick={nextStep} className="next">
      {t('Next')}
    </button>
  </div>
)}


{step === 4 && (
  <div className="form-div">
    <h2 className="industry">{t('Leadership & Commitment')}</h2>
    
    <label>{t('Does your company have dedicated digital transformation leader or team?(Yes/No)')}</label>
    <label>
  <input
    type="checkbox"
    name="companyName"
    value="Yes"
    checked={formData.companyName === 'Yes'}
    onChange={handleChange}
    className="confirm-checkbox"
  />
  {t('Yes')}
</label>
<label>
  <input
    type="checkbox"
    name="companyName"
    value="No"
    checked={formData.companyName === 'No'}
    onChange={handleChange}
    className="confirm-checkbox"
  />
  {t('No')}
</label>

    
    <label>{t('Has your company previously developed a digital transformation strategy or roadmap?(Yes/No)')}</label>
    <label>
  <input
    type="checkbox"
    name="companyName"
    value="Yes"
    checked={formData.companyName === 'Yes'}
    onChange={handleChange}
    className="confirm-checkbox"
  />
  {t('Yes')}
</label>
<label>
  <input
    type="checkbox"
    name="companyName"
    value="No"
    checked={formData.companyName === 'No'}
    onChange={handleChange}
    className="confirm-checkbox"
  />
  {t('No')}
</label>
    
    <label>{t('Are senior executives committed to implementing digital transformation strategy?(Yes/No)')}</label>
    <label>
  <input
    type="checkbox"
    name="companyName"
    value="Yes"
    checked={formData.companyName === 'Yes'}
    onChange={handleChange}
    className="confirm-checkbox"
  />
  {t('Yes')}
</label>
<label>
  <input
    type="checkbox"
    name="companyName"
    value="No"
    checked={formData.companyName === 'No'}
    onChange={handleChange}
    className="confirm-checkbox"
  />
  {t('No')}
</label>

    <div>
      <h2 className="industry">{t('Funding & Financial support needs')}</h2>
      <label>{t('Would your company require financial assistance for implementation?')}</label>
      <label>
  <input
    type="checkbox"
    name="companyName"
    value="Yes"
    checked={formData.companyName === 'Yes'}
    onChange={handleChange}
    className="confirm-checkbox"
  />
  {t('Yes')}
</label>
<label>
  <input
    type="checkbox"
    name="companyName"
    value="No"
    checked={formData.companyName === 'No'}
    onChange={handleChange}
    className="confirm-checkbox"
  />
  {t('No')}
</label>
      <label>{t('Estimated budget required for digital transformation (If known)')}</label>
      <input
        type="text"
        name="registrationNumber"
        value={formData.registrationNumber}
        onChange={handleChange}
        required
      />
    </div>
    
    <button type="button" onClick={nextStep} className="next">
      {t('Next')}
    </button>
  </div>
)}

{step === 5 && (
  <div className="form-div">
    <h2 className="industry">{t('Additional Supporting Document')}</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>{t('Company Registration Certification:')}</label>
        <div>
  <label className="custom-file-upload" htmlFor="companyRegistration">
    {t('Upload')}
  </label>
  <input
    type="file"
    id="companyRegistration"
    onChange={(e) => handleFileChange(e, "companyRegistration")}
    style={{ display: "none" }}
  />
</div>

      </div>
      <div>
        <label>{t('Financial Statements (last 2 years):')}</label>
        <div>
  <label className="custom-file-upload"  htmlFor="companyRegistration">
    {t('Upload')}
  </label>
  <input
    type="file"
    id="companyRegistration"
    onChange={(e) => handleFileChange(e, "companyRegistration")}
    style={{ display: "none" }}
  />
</div>
      </div>
      <div>
        <label>{t('Existing Digital Transformation Plans (if available):')}</label>
        <div>
  <label className="custom-file-upload" htmlFor="companyRegistration">
    {t('Upload')}
  </label>
  <input
    type="file"
    id="companyRegistration"
    onChange={(e) => handleFileChange(e, "companyRegistration")}
    style={{ display: "none" }}
  />
</div>
      </div>

      <div>
        <h2 className="industry">{t('Declaration & Consent')}</h2>
        <label  className="confirm-text">
          <input
            type="checkbox"
            name="confirmInfo"
            checked={checkboxes.confirmInfo}
            onChange={handleCheckboxChange}
            className="confirm-checkbox"
          />
          {t('I confirm that the information provided is accurate to the best of my knowledge.')}
        </label>
      </div>
      <div>
        <label  className="confirm-text"
        >
          <input
            type="checkbox"
            name="consentContact"
            checked={checkboxes.consentContact}
            onChange={handleCheckboxChange}
            className="confirm-checkbox"
          />
          {t('I agree to be contacted by 4SIM regarding my application.')}
        </label>
      </div>
    </form>
  </div>
)}

       <div className="son-buttons">
        {step > 1 && (
          <button type="button" onClick={prevStep} className="back">
            {t('Back')}
          </button>
        )}

        {step === 5 && (
          <button type="submit" className="submit-button">
            {t('Submit')}
          </button>
        )}
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
