---
title: ISC2 - Chapter 1 Security Principles
slug: ISC2-Chapter-1-Security-Principles
category: Courses, ISC2
tags: 
  - Isc
  - Certified
  - Cybersecurity
  - Course

excerpt : (ISC)² Certified in Cybersecurity is a foundational cybersecurity certification designed to help recipients build a pathway to a rewarding career in cybersecurity. This entry-level certification will prove to employers you have the foundational knowledge, skills and abilities necessary for an entry- or junior-level cybersecurity role. It proves your willingness and ability to learn and grow on the job.
datetime: 2022-07-13T13:08:12.000+00:00
coverImageWidth: "1200"
coverImageHeight: "700"
coverImage: https://res.cloudinary.com/doi2vsrjj/image/upload/v1709233483/brand_miokwy.gif
---

## Module 1: Understand the Security Concepts of Information Assurance
### The CIA Triad
+ **Confidentiality**
  + permitting authorized access to information. while at the same time protecting information from improper disclosure.

+ Integrity
  + property of information whereby it is recorded, used and maintained in a way that ensures its completeness, accuracy, internal consistency and usefulness for a stated purpose.

+ Availability
  + Availability means that systems and data are accessible at the time users need them.

### CIA Triad Deep Dive
#### Confidentiality
+ difficult balance to achieve when many system users are guests or customers
+ not known if they are accessing the system from a compromised machine or vulnerable mobile application.
  + **Personally Identifiable Information (PII)**
  + **protected health information (PHI)**
  +  classified or sensitive information

+ sensitivity
  + measure of the importance assigned to information by its owner, or the purpose of denoting its need for protection. Sensitive information is information that if improperly disclosed (confidentiality) or modified (integrity) would harm an organization or individual.

#### Integrity
+ measures the degree to which something is whole and complete, internally consistent and correct.
+ **concept of integrity applies to**
  + information or data
  + systems and processes for business operations
  + organizations
  + people and their actions

+ **Data integrity**
  + assurance that data has not been altered in an unauthorized manner
  + requires the protection of the data in systems and during processing to ensure that it is free from improper modification, errors or loss of information and is recorded

+ **System integrity**
  + maintenance of a known good configuration and expected operational function as the system processes the information
  + **basline**
    + documented lowest lowest level of security configuration allowed by the standard or organization

+ safeguard information and system integrity may be dictated by laws and regulations

#### Availability
+ timely and reliable access to information and the ability to use it for authorized users
+ does not mean that data or systems are available 100% of the time.
+ different levels of security based on criticality of system running

### Authentication
+ process of verifying or proving the user’s identification is known as authentication.
+ authentication is a process to prove the identity of the requestor.

#### Three common methods of authentication:
1. Something you know: Passwords or paraphrases
2. Something you have: Tokens, memory cards, smart cards
3. Something you are: Biometrics , measurable characteristics

### Methods of Authentication
#### Types
1. **Single-factor authentication (SFA)**
2. **Multi-factor authentication (MFA)**

#### 3 common techniques for authentication: 
+ Knowledge-based 
+ Token-based 
+ Characteristic-based

### Knowledge Check: Security Concepts
+ **Authorization** : The right or a permission that is granted to a system entity to access a system resource.
+ **Integrity** : The property that data has not been altered in an unauthorized manner.
+ **Confidentiality** : The characteristic of data or information when it is not made available or disclosed to unauthorized persons or processes
+ **Privacy** : The right of an individuai to controf the dis tribution of information about themseves.
+ **Availability** : Ensuring timely and reliable access to and use of information by autho rized users
+ **Non - Repudiation** : The inability to deny taking an action, such as sending an email message.
+ **Authentication** : Access control process that compares one or more factors of identification to validate that the identity claimed by a user or entity is known to the system.

### Non -Repudiation
+ protection against an individual falsely denying having performed a particular action.
+ Non-repudiation methodologies ensure that people are held responsible for transactions they conducted.

### Privacy
+ **Privacy** is the right of an individual to control the distribution of information about themselves.
+ privacy legislation and regulations on privacy and data protection can impact corporations and industries regardless of physical location
+ Global privacy is an especially crucial issue when considering requirements regarding the collection and security of personal information.
+ An example of a law with multinational implications is the European Union’s **General Data Protection Regulation (GDPR)** which applies to all organizations, foreign or domestic, doing business in the EU or any persons in the EU.
+ As a member of an organization's data protection team, you will not be required to interpret these laws, but you will need an understanding of how they apply to your organization.

### Privacy in the Working Environment
+ The **Health Insurance Portability and Accountability Act of 1996 (HIPAA)** is a federal law that required the creation of national standards to protect sensitive patient health information from being disclosed without the patient's consent or knowledge.


## Module 2: Understand the Risk Management Process

### Introduction of Risk Management
+ Level of cybersecurity required depends on the level of risk the entity is willing to accept
+ Security professionals use their knowledge and skills to examine operational risk management, determine how to use risk data effectively, work cross-functionally and report actionable information and findings to the stakeholders concerned
  + An **asset** is something in need of protection.
  + A **vulnerability** is a gap or weakness in those protection efforts.
  + A **threat** is something or someone that aims to exploit a vulnerability to thwart protection efforts.

+ **Likelihood of occurrence** is a weighted factor based on a subjective analysis of the probability that a given threat or set of threats is capable of exploiting a given vulnerability or set of vulnerabilities.
+ **Impact** is the magnitude of harm that can be expected to result from the consequences of unauthorized disclosure of information, unauthorized modification of information, unauthorized destruction of information, or loss of information or information system availability.

### Risk Identification
+ Recurring process of identifying different possible risks, characterizing them and then estimating their potential for disrupting the organization.  
+ **Takeaways to remember about risk identification:**
  + Identify risk to communicate it clearly. 
  + Employees at all levels of the organization are responsible for identifying risk.
  + Identify risk to protect against it. 

+ you are likely to assist in risk assessment at a system level, focusing on process, control, monitoring or incident response and recovery activities.

### Risk Assessment
+ Process of identifying, estimating and prioritizing risks to an organization’s operations (including its mission, functions, image and reputation), assets, individuals, other organizations and even the nation.
+ A common risk assessment activity identifies the risk of fire to a building

### Risk Treatment
+ making decisions about the best actions to take regarding the identified and prioritized risk.


  + **Risk avoidance** is the decision to attempt to eliminate the risk entirely. This could include ceasing operation for some or all of the activities of the organization that are exposed to a particular risk. Organization leadership may choose risk avoidance when the potential impact of a given risk is too high or if the likelihood of the risk being realized is simply too great.
  + **Risk acceptance** is taking no action to reduce the likelihood of a risk occurring. Management may opt for conducting the business function that is associated with the risk without any further action on the part of the organization, either because the impact or likelihood of occurrence is negligible, or because the benefit is more than enough to offset that risk.
  + **Risk mitigation** is the most common type of risk management and includes taking actions to prevent or reduce the possibility of a risk event or its impact. Mitigation can involve remediation measures, or controls, such as security controls, establishing policies, procedures, and standards to minimize adverse risk. Risk cannot always be mitigated, but mitigations such as safety measures should always be in place.
  + **Risk transference** is the practice of passing the risk to another party, who will accept the financial impact of the harm resulting from a risk being realized in exchange for payment. Typically, this is an insurance policy.

### Risk Terms
+ Mitigation : Taking action to prevent or reduce the impact of an event
  + Mitigation involves taking action to remove or lessen the effects of risks.
+ Acceptance : gnoring the risks and continuing risky activities.
  + Acceptance is choosing to ignore a risk and proceed with a risky activity.
+ Avoidance : Ceasing the risky activity to remove the likelihood that an event will occur.
  + Avoidance is halting the risky activity.
+ Vulnerability : An inherent weakness or flaw.
+ Asset : Something of value that is owned by an organization, including physical hardnware and intellectual property
+ Threat : A person or entity that deliberately takes action to exploit a target.
+ Transference : Passing risk to a third party.
  + Transference is shifting the risk via legal agreement, usually to another party such as a service or insurance provider.

### Risk Priorities
+ **Qualitative risk analysis** : method based on the assignment od the descriptor
+ **Quantitative risk analysis** : method of analysis where numerical values are assigned to both impact and licklihood based on the statistical probabilities and monterised valuation of losses and gaines.
+ management will provide direction for using the findings of the risk assessment to determine a prioritized set of risk-response actions.
+ One effective method to prioritize risk is to use a risk matrix, which helps identify priority as the intersection of likelihood of occurrence and impact. 

### Decision Making Based on Risk Priorities
+ organizations must evaluate the likelihood and impact of the risk as well as their tolerance for different sorts of risk.

### Risk Tolerance
+ Level Of risk an entity is wiling to assume in order to achieve a potential desired result.
+ Understanding the organization and senior management’s attitude toward risk the starting point for getting management to take action regarding risks.
+ risk tolerance is dictated by geographic location

## Module 3: Understand Security Controls

### What are Security Controls?
+ The management operational and technical controls prescribed for an information system to protect the confidentiality, integrity, and availability of the system and its information.
+ The implementation of controls should reduce risk, hopefully to an acceptable level.

+ **Physical Controls**
  + controls implemented through a tangible mechanism.
  + process-based security needs using physical hardware devices, such as badge readers, architectural features of buildings and facilities, and specific security actions to be taken by people.
  + physical controls are supported by technical controls as a means of incorporating them into an overall security system.

+ **Technical Controls**
  + primarily implemented and executed by the information system through mechanisums contained in the hardware, software or firmware components of the system.
  + security controls that computer systems and networks directly implement.
  + provide automated protection from unauthorized access or misuse, facilitate detection of security violations and support security requirements for applications and data.

+ **Administrative Controls**
  + Controls implemented through policy an procedures
  + in modern environment are enforced in conjunction with physical or technical controls.
  + like access granting policy for new users that require login and approval by hiring managers.

### Knowledge Check
1. This can protect information in a file cabinet from being viewed by unauthorized persons (confidentiality) as well as keeping any documents from being modified (integrity).
   + **`Door Lock`**

2. This one is abstract but could be linked to availability, because the sooner it works, the more data remains available. 
   + **`Fire Extinguisher`**

3. This can provide confidentiality by protecting data from unauthorized access and integrity from unauthorized changes. It could even be stretched to provide availability if shared emergency access to information is needed by more than one person. 
   + **`Password Policy`**

4. This is usually associated with integrity, to protect files from tampering or to provide non-repudiation.  It is also commonly used to protect data in transit from prying eyes, so it could be aiding confidentiality as well.   
   + **`Encryption`**

5. This protects availability by ensuring continued access to systems during a power outage.
   + Generator

6. This would most generally be associated with confidentiality and identity management, but could be argued for all three, the same as a password policy.   
  + **`Biometrics`**

## Module 4: Understand Governance Elements and Processes
### Governance Elements
+ leaders and management implement the systems and structures that the organization will use to achieve its goals, they are guided by laws and regulations created by governments to enact public policy.
+ Laws and regulations guide the development of standards, which cultivate policies, which result in procedures.

### How are regulations, standards, policies and procedures related?

1. **`Procedures`** are the detailed steps to complete a task that support departmental or organizational policies.
   + procedures establish the measurement criteria and methods to use to determine whether a task has been successfully completed.

2. **`Policies`** are put in place by organizational governance, such as executive management, to provide guidance in all activities to ensure that the organization supports industry standards and regulations.
   + Policies are often written at many levels across the organization.
  
3. **`Standards`** are often used by governance teams to provide a framework to introduce policies and procedures in support of regulations.
   + **`International Organization for Standardization (ISO)`** develops and publishes international standards on a variety of technical subjects, including information systems and information security, as well as encryption standards.
   + **`National Institute of Standards and Technology (NIST)`** is a United States government agency under the Department of Commerce and publishes a variety of technical standards in addition to information technology and information security standards.
   +  **`Internet Engineering Task Force (IETF)`**, there are standards in communication protocols that ensure all computers can connect with each other across borders, even when the operators do not speak the same language.
   +  **`Institute of Electrical and Electronics Engineers (IEEE)`** also sets standards for telecommunications, computer engineering and similar disciplines.

4. **`Regulations`** are commonly issued in the form of laws, usually from government (not to be confused with governance) and typically carry financial penalties for noncompliance.
   + **`Health Insurance Portability and Accountability Act (HIPAA)`** of 1996 is an example of a law that governs the use of protected health information (PHI) in the United States.
   + **`General Data Protection Regulation (GDPR)`** was enacted by the European Union (EU) to control use of Personally Identifiable Information (PII) of its citizens and those in the EU.


### Governance Terms 
1. **`Policies`** are the highest-level governance documents in an organization, usually approved and issued by management, usually to support a compliance initiative.
2. A security practitioner who needs step-by-step instructions to complete a provisioning task might use a your answer **`procedures`** to ensure they are performing the task in a consistent manner.
3. Frameworks, or your answer **`standards`** are often offered by third-party organizations and cover specific advisory or compliance objectives
4. Usually mandated by a government agency, your answer **`regulations`** are a set of rules that everyone must comply with and usually carry monetary penalties for noncompliance. 

### Governance Elements
The Healthcare Insurance Portability and Accountability Act of 1996 (HIPAA) is a federal **`LAW`** in the United States that requires certain actions be taken to protect health information. Many organizations use published frameworks, or **`STANDARDS`**, to guide the organizational **`POLICIES`** that support the compliance effort. Many departments or workgroups within the organization implement **`PROCEDURES`** that detail how they complete day-to-day tasks while remaining compliant.

## Module 5: Understand (ISC)² Code of Ethics
### Professional Code of Conduct
#### ISC2 Code Of Ethics Preamble
+ The Preamble states the purpose and intent of the (ISC)2 Code of Ethics.
  + The safety and welfare of society and the common good, duty to our principals, and to each other, requires that we adhere, and be seen to adhere, to the highest ethical standards of behavior.
  + Therefore, strict adherence to this Code is a condition of certification.

#### ISC2 Code of Ethics Canons
+ Protect society, the common good, necessary public trust and confidence, and the infrastructure.
+ Act honorably, honestly, justly, responsibly and legally.
+ Provide diligent and competent service to principals.
+ Advance and protect the profession.

### What is the Appropriate Action?
+ Cranz is an (ISC)² member and an employee of Triffid Corporation. One of Cranz’s colleagues offers to share a file that contains an illicit copy of a newly released movie. What should Cranz do?
  + **`Refuse to accept`**
    + The (ISC)² Code of Ethics requires that members “act honorably, honestly, justly, responsibly and legally.” Refusing to accept or participate in the distribution of intellectual property owned by someone else would be counter to this Canon, and it would also go against the Canon requiring that (ISC)² members “advance and protect the profession.”



  


