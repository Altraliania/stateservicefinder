document.addEventListener("DOMContentLoaded", () => {
  console.log("State Service Finder loaded successfully!");
});


const programsData = [
  // Connecticut
  { state: 'CT', category: 'Food', name: 'Connecticut SNAP', desc: 'Supplemental Nutrition Assistance Program providing monthly food benefits.', eligibility: 'Low-income households based on income limits.', action: 'https://portal.ct.gov/dss', type: 'Web' },
  { state: 'CT', category: 'Healthcare', name: 'HUSKY Health', desc: 'Connecticut’s Medicaid and Children’s Health Insurance Program.', eligibility: 'Children, parents, caregivers, and low-income adults.', action: 'https://www.accesshealthct.com', type: 'Web' },
  { state: 'CT', category: 'Utilities', name: 'CEAP (Energy Assistance)', desc: 'Helps low-income households pay primary heating bills.', eligibility: 'Income at or below 60% of state median income.', action: 'tel:211', type: 'Phone' },
  { state: 'CT', category: 'Housing', name: 'CT State Department of Housing Services', desc: 'Official Connecticut portal for housing support and state services.', eligibility: 'Connecticut residents looking for state housing assistance and resources.', action: 'https://portal.ct.gov', type: 'Web' },
  { state: 'CT', category: 'Housing', name: 'CT Housing Choice Voucher Program (HCVP)', desc: 'Rental assistance program helping low-income families afford decent, safe housing in the private market.', eligibility: 'Very low-income families, elderly, and disabled individuals.', action: 'https://www.cthcvp.org', type: 'Web' },
  { state: 'CT', category: 'Housing', name: '211 Connecticut Housing & Homeless Services', desc: 'Comprehensive state directory for emergency shelter, rental aid, and housing crisis intervention.', eligibility: 'Connecticut residents experiencing housing instability or homelessness.', action: 'https://www.211ct.org/', type: 'Web' },
  { state: 'CT', category: 'Cash', name: 'ConneCT Cash Assistance (TFA / State Supplement)', desc: 'Temporary Family Assistance and cash aid for eligible families and individuals in Connecticut.', eligibility: 'Low-income Connecticut families, pregnant women, and elderly or disabled individuals.', action: 'tel:18556266632', type: 'Phone' },
  
  // Maine
  { state: 'ME', category: 'Food', name: 'Maine SNAP (Food Supplement)', desc: 'Provides monthly benefits via the Pine Tree EBT Card to help low-income households purchase food.', eligibility: 'Maine residents meeting income threshold guidelines based on household size.', action: 'https://www.mymaineconnection.gov', type: 'Web' },
  { state: 'ME', category: 'Healthcare', name: 'MaineCare', desc: 'Free or low-cost health and medical coverage for eligible Maine residents.', eligibility: 'Low-income families, seniors, pregnant individuals, and adults.', action: 'https://www.mymaineconnection.gov', type: 'Web' },
  { state: 'ME', category: 'Housing', name: 'MaineHousing Rental & Voucher Assistance', desc: 'Housing Choice Voucher program, subsidized apartment directories, and rental assistance.', eligibility: 'Low- and moderate-income individuals and families seeking affordable housing.', action: 'https://www.mainehousing.org/programs-services/rental', type: 'Web' },
  { state: 'ME', category: 'Housing', name: '211 Maine Housing & Homelessness Services', desc: 'Statewide directory for emergency shelters, rental crisis relief, and housing support.', eligibility: 'Maine residents facing immediate housing instability or homelessness.', action: 'https://www.211maine.org', type: 'Web' },
  { state: 'ME', category: 'Utilities', name: 'Maine Home Energy Assistance Program (HEAP)', desc: 'Helps eligible homeowners and renters pay heating costs, fuel delivery, and energy repairs.', eligibility: 'Income-eligible Maine households meeting state median income limits.', action: 'https://www.mainehousing.org/programs-services/energy/energydetails/liheap', type: 'Web' },
  { state: 'ME', category: 'Cash', name: 'Maine TANF & General Assistance', desc: 'Temporary cash assistance for needy families with children and short-term emergency municipal aid.', eligibility: 'Low-income families with dependent children, pregnant individuals, and qualifying residents.', action: 'https://www.mymaineconnection.gov', type: 'Web' },

  // Massachusetts
 { state: 'MA', category: 'Food', name: 'MA SNAP (DTA Connect)', desc: 'Provides monthly EBT funds for groceries across Massachusetts.', eligibility: 'Massachusetts residents meeting state income guidelines.', action: 'https://www.dtaconnect.eohhs.mass.gov/', type: 'Web' },
  { state: 'MA', category: 'Healthcare', name: 'MassHealth', desc: 'Combines Medicaid and CHIP for full medical coverage.', eligibility: 'Massachusetts residents meeting income limits.', action: 'https://www.mass.gov/masshealth', type: 'Web' },
  { state: 'MA', category: 'Housing', name: 'RAFT Housing Assistance', desc: 'Provides short-term financial help for families facing eviction or housing crises.', eligibility: 'Income-eligible households in emergency housing situations.', action: 'https://www.mass.gov/raft', type: 'Web' },
  { state: 'MA', category: 'Utilities', name: 'MA Home Energy Assistance (LIHEAP / MassHEAP)', desc: 'Grants to help income-eligible households pay heating and electric bills.', eligibility: 'Renters and homeowners earning up to 60% of the State Median Income.', action: 'https://www.toapply.org/MassHEAP', type: 'Web' },
  { state: 'MA', category: 'Cash', name: 'MA DTA Cash Assistance (TAFDC / EAEDC)', desc: 'Temporary financial assistance and economic support programs administered by the DTA.', eligibility: 'Low-income families with children, elderly, disabled, or incapacitated adults.', action: 'https://www.mass.gov/economic-assistance-cash-benefits', type: 'Web' },

  // New Hampshire
  { state: 'NH', category: 'Food', name: 'NH SNAP (Food Stamps)', desc: 'Provides monthly funds on an EBT card to help low-income Granite Staters buy groceries.', eligibility: 'New Hampshire residents meeting state income limits.', action: 'https://nheasy.nh.gov/', type: 'Web' },
  { state: 'NH', category: 'Healthcare', name: 'NH Medicaid & Granite Advantage', desc: 'Comprehensive medical insurance covering doctor visits, hospital care, and prescriptions.', eligibility: 'Low-income adults, children, pregnant women, seniors, and individuals with disabilities.', action: 'https://nheasy.nh.gov/', type: 'Web' },
  { state: 'NH', category: 'Housing', name: 'NH Housing Voucher & Rental Assistance', desc: 'Statewide rental assistance, housing voucher programs, and affordable housing locator.', eligibility: 'Low- and moderate-income families, seniors, and residents facing housing hardship.', action: 'https://www.nhhfa.org/', type: 'Web' },
  { state: 'NH', category: 'Housing', name: '211 NH Homelessness & Emergency Housing', desc: 'Central connection for emergency shelter, eviction prevention, and housing relief.', eligibility: 'Any New Hampshire resident in need of immediate housing support or shelter.', action: 'https://www.211nh.org/', type: 'Web' },
  { state: 'NH', category: 'Utilities', name: 'NH Fuel & Electric Assistance Programs (FAP / EAP)', desc: 'Helps low-income households pay heating, electricity, and winter energy utility bills.', eligibility: 'Granite State residents earning at or below specified state median income thresholds.', action: 'https://www.capnh.org/', type: 'Web' },
  { state: 'NH', category: 'Cash', name: 'NH FANF (Financial Assistance for Needy Families)', desc: 'Cash assistance program providing financial aid, emergency grants, and employment support.', eligibility: 'Low-income families with dependent children, pregnant individuals, or relatives caring for children.', action: 'https://nheasy.nh.gov/', type: 'Web' },

  // New Jersey
  { state: 'NJ', category: 'Food', name: 'NJ SNAP', desc: 'Food assistance program offering monthly funds for groceries.', eligibility: 'NJ residents based on family size and gross income.', action: 'https://www.nj.gov/humanservices/njsnap', type: 'Web' },
  { state: 'NJ', category: 'Food', name: 'CFBNJ', desc: 'Food assistance program offering Canned Food, Meats, and Vegtables dontated by the Community.', eligibility: 'NJ residents located Nearby Food Banks.', action: 'https://cfbnj.org/', type: 'Web' },
  { state: 'NJ', category: 'Healthcare', name: 'NJ FamilyCare', desc: 'Publicly funded health insurance program.', eligibility: 'Children, pregnant women, and low-income adults.', action: 'http://www.njfamilycare.org', type: 'Web' },
  { state: 'NJ', category: 'Housing', name: 'NJ Disaster Recovery & Housing (Hurricane Ida)', desc: 'Division of Disaster Recovery and Mitigation providing housing recovery and assistance for residents impacted by Hurricane Ida.', eligibility: 'NJ residents and homeowners/renters affected by Hurricane Ida or needing disaster recovery support.', action: 'https://www.nj.gov/dca/ddrm/', type: 'Web' },
  { state: 'NJ', category: 'Housing', name: 'NJ Housing & Rental Assistance', desc: 'State housing resources, rental relief programs, and affordable housing options.', eligibility: 'Low- to moderate-income NJ individuals and families facing housing instability.', action: 'https://www.nj.gov/dca/divisions/dhcr/', type: 'Web' },
  { state: 'NJ', category: 'Cash', name: 'WorkFirst NJ (Cash Assistance)', desc: 'Temporary cash assistance for needy families (TANF) and single individuals/couples without children (GA).', eligibility: 'Low-income New Jersey residents meeting income and asset guidelines.', action: 'https://www.njhelps.gov/NJHelpsApplicationScreen', type: 'Web' },
  { state: 'NJ', category: 'Utilities', name: 'NJ Energy & Utility Assistance (DCAID)', desc: 'DCAID portal screening and assistance for LIHEAP, USF, and state utility grants.', eligibility: 'Low- to moderate-income NJ households struggling with heating, cooling, or electric bills.', action: 'https://dcaid.dca.nj.gov/en-US/', type: 'Web' },

  // New York
  { state: 'NY', category: 'Food', name: 'NY SNAP (myBenefits)', desc: 'Monthly EBT benefits to buy groceries for eligible New Yorkers via the myBenefits portal.', eligibility: 'New York state residents meeting federal and state income threshold guidelines.', action: 'https://mybenefits.ny.gov', type: 'Web' },
  { state: 'NY', category: 'Food', name: 'Hunger Solution NY', desc: 'For the entire New York State including NYC and Long Island, a New York Assistance Program that finds Food help for Families by County and Zip Code with NOEP Coordinators', eligibility: 'New York residents meeting location guidlines by Zip Code/County.', action: 'https://hungersolutionsny.org/', type: 'Web' },
  { state: 'NY', category: 'Healthcare', name: 'NY State of Health (Medicaid & Child Health Plus)', desc: 'Official New York State health plan marketplace offering Medicaid, Essential Plan, and Child Health Plus.', eligibility: 'New York residents meeting income eligibility criteria.', action: 'https://nystateofhealth.ny.gov/', type: 'Web' },
  { state: 'NY', category: 'Housing', name: 'NY HCR Housing & Section 8 Assistance', desc: 'Homes and Community Renewal programs providing rental vouchers, subsidized housing, and tenant aid.', eligibility: 'Low- to moderate-income New York households seeking affordable housing or rental vouchers.', action: 'https://hcr.ny.gov/subsidized-housing', type: 'Web' },
  { state: 'NY', category: 'Housing', name: '211 NY Housing & Emergency Shelter Services', desc: 'Statewide portal connecting residents to emergency housing, eviction prevention, and community resources.', eligibility: 'New York residents experiencing housing instability, eviction threats, or homelessness.', action: '211', type: 'Phone' },
  { state: 'NY', category: 'Utilities', name: 'NY HEAP (Home Energy Assistance Program)', desc: 'Assists eligible New Yorkers with home heating, cooling, emergency energy grants, and utility bill support.', eligibility: 'Income guidelines based on household size and heating source.', action: 'https://otda.ny.gov/programs/heap/', type: 'Web' },
  { state: 'NY', category: 'Cash', name: 'NY Temporary Assistance (Family Assistance & Safety Net)', desc: 'New York Cash Assistance programs offering financial aid to needy families, pregnant women, and single adults.', eligibility: 'Low-income NY residents meeting state financial and resource limits.', action: 'https://mybenefits.ny.gov', type: 'Web' },

  // Pennsylvania
  { state: 'PA', category: 'Food', name: 'PA SNAP (COMPASS)', desc: 'Provides monthly electronic benefits for purchasing food at authorized grocery stores across PA.', eligibility: 'Pennsylvania residents meeting income and household size qualifications.', action: 'https://www.compass.state.pa.us', type: 'Web' },
  { state: 'PA', category: 'Food', name: 'PA SNAP (COMPASS)', desc: 'Provides monthly electronic benefits for purchasing food at authorized grocery stores across PA.', eligibility: 'Pennsylvania residents meeting income and household size qualifications.', action: 'https://www.feedingpa.org/', type: 'Web' },
  { state: 'PA', category: 'Healthcare', name: 'PA Medical Assistance (Medicaid / CHIP)', desc: 'Comprehensive medical coverage including doctor visits, hospital care, and prescription coverage.', eligibility: 'Low-income adults, pregnant women, children, seniors, and individuals with disabilities.', action: 'https://www.compass.state.pa.us', type: 'Web' },
  { state: 'PA', category: 'Housing', name: 'PA Housing Finance Agency (PHFA) & Rental Support', desc: 'Housing vouchers, affordable housing locator, and homeownership assistance programs.', eligibility: 'Low- to moderate-income Pennsylvanians looking for housing or rental support.', action: 'https://www.phfa.org/', type: 'Web' },
  { state: 'PA', category: 'Housing', name: '211 PA Housing & Emergency Shelter Services', desc: 'Statewide directory for emergency shelters, eviction defense, and housing stability support.', eligibility: 'Pennsylvania residents facing housing emergencies or eviction.', action: 'https://www.pa211.org/', type: 'Web' },
  { state: 'PA', category: 'Utilities', name: 'PA LIHEAP (Low Income Home Energy Assistance)', desc: 'Cash grants and crisis grants to help eligible Pennsylvania households pay heating bills.', eligibility: 'Homeowners and renters meeting state income requirements.', action: 'https://www.dhs.pa.gov/Services/Assistance/Pages/LIHEAP.aspx', type: 'Web' },
  { state: 'PA', category: 'Cash', name: 'PA Cash Assistance (TANF & General Assistance)', desc: 'Temporary financial assistance for low-income families and individuals in Pennsylvania.', eligibility: 'Low-income families with children, pregnant women, and eligible single adults.', action: 'https://www.compass.state.pa.us', type: 'Web' },
  
  // Rhode Island
 { state: 'RI', category: 'Food', name: 'Rhode Island SNAP (HealthyRhode)', desc: 'Monthly supplemental food assistance benefits delivered on a Rhode Island EBT card.', eligibility: 'Rhode Island residents meeting household income limits.', action: 'https://healthyrhode.ri.gov', type: 'Web' },
  { state: 'RI', category: 'Healthcare', name: 'HealthSource RI & RI Medicaid', desc: 'State healthcare exchange and Medicaid program offering free or affordable health insurance.', eligibility: 'Rhode Island residents qualifying by household income and family size.', action: 'https://healthyrhode.ri.gov', type: 'Web' },
  { state: 'RI', category: 'Housing', name: 'RIHousing & Rental Voucher Assistance', desc: 'Statewide housing portal for affordable housing, rental vouchers, and housing development.', eligibility: 'Low- and moderate-income Rhode Island individuals and families.', action: 'https://www.rihousing.com/', type: 'Web' },
  { state: 'RI', category: 'Housing', name: '211 Rhode Island Emergency Housing Services', desc: 'Emergency shelter hotline, housing crisis intervention, and homelessness relief.', eligibility: 'Rhode Island residents needing immediate housing or shelter support.', action: 'https://www.211ri.org/', type: 'Web' },
  { state: 'RI', category: 'Utilities', name: 'RI Low Income Home Energy Assistance Program (LIHEAP)', desc: 'Helps low-income Rhode Islanders pay primary heating bills and electric utility expenses.', eligibility: 'Income-eligible renters and homeowners earning up to 60% of state median income.', action: 'https://dhs.ri.gov/programs-and-services/energy-and-water-assistance', type: 'Web' },
  { state: 'RI', category: 'Cash', name: 'Rhode Island Works (RIW Cash Aid)', desc: 'Cash aid, job training, and childcare support for needy Rhode Island families with children.', eligibility: 'Low-income families with dependent children and pregnant individuals.', action: 'https://healthyrhode.ri.gov', type: 'Web' },

  // Vermont
  { state: 'VT', category: 'Food', name: '3SquaresVT (Vermont SNAP)', desc: 'Vermont’s SNAP program providing monthly grocery benefits on a 3SquaresVT EBT card.', eligibility: 'Vermont households qualifying under federal and state income limits.', action: 'https://dcf.vermont.gov/benefits/3SquaresVT', type: 'Web' },
  { state: 'VT', category: 'Healthcare', name: 'Vermont Health Connect & Green Mountain Care', desc: 'Official state health portal offering Medicaid, Dr. Dynasaur, and affordable plan options.', eligibility: 'Vermont adults, children, pregnant women, seniors, and disabled residents.', action: 'https://portal.healthconnect.vermont.gov/', type: 'Web' },
  { state: 'VT', category: 'Housing', name: 'Vermont State Housing Authority (VSHA)', desc: 'Section 8 housing vouchers, project-based assistance, and state housing development.', eligibility: 'Low-income individuals, families, seniors, and people with disabilities in Vermont.', action: 'https://www.vsha.org/', type: 'Web' },
  { state: 'VT', category: 'Housing', name: '211 Vermont Emergency Housing & Crisis Support', desc: 'Statewide referral network for emergency shelters, rental support, and homeless assistance.', eligibility: 'Vermont residents facing housing instability or needing emergency shelter.', action: 'https://www.vermont211.org/', type: 'Web' },
  { state: 'VT', category: 'Utilities', name: 'Vermont Seasonal Fuel & Crisis Fuel Assistance', desc: 'Helps low-income Vermonters pay home heating, electric, and winter fuel bills.', eligibility: 'Vermont households earning within state fuel assistance income guidelines.', action: 'https://dcf.vermont.gov/benefits/fuel', type: 'Web' },
  { state: 'VT', category: 'Cash', name: 'Vermont Reach Up (Cash Assistance)', desc: 'Financial aid and case management to help families with children meet basic living needs.', eligibility: 'Low-income Vermont families with dependent children or pregnant individuals.', action: 'https://dcf.vermont.gov/benefits/reachup', type: 'Web' }
];

document.addEventListener("DOMContentLoaded", function() {
  const searchBtn = document.getElementById('search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', runSearch);
  } else {
    console.log("Search button not found");
  }
});

function runSearch() {
  const selectedState = document.getElementById('state-select').value;
  const selectedCategory = document.getElementById('category-select').value;
  const resultsContainer = document.getElementById('results-container');

  resultsContainer.innerHTML = '';

const filtered = programsData.filter(function(prog) {
  if (prog.state === selectedState) {
    if (selectedCategory === 'All') {
      return true;
    } else {
      if (prog.category === selectedCategory) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
});

if (filtered.length === 0) {
  resultsContainer.innerHTML =
    '<div class="cue-card">' +
    '<p>No specific programs matching that category were found for this state. Try selecting "All Categories".</p>' +
    '</div>';
  return;
} else {
}

filtered.forEach(function(prog) {
  let buttonLabel = 'Sign Up ↗';

    
   if (prog.action.startsWith('tel:')) {
  const rawNumber = prog.action.replace('tel:', '');
  if (rawNumber === '211') {
    buttonLabel = 'Call 211';
  } else {
    buttonLabel = 'Call ' + formatPhone(rawNumber);
  }
} else {
  if (prog.action.startsWith('http')) {
    buttonLabel = 'Sign Up ↗';
  }
}

const cardHtml =
  '<div class="cue-card">' +
    '<div class="cue-card-details">' +
      '<span class="cue-card-badge">' + prog.category + ' Assistance</span>' +
      '<h3>' + prog.name + '</h3>' +
      '<p>' + prog.desc + '</p>' +
      '<div class="cue-card-info"><strong>Eligibility:</strong> ' + prog.eligibility + '</div>' +
      '<div class="cue-card-info"><strong>State:</strong> ' + prog.state + '</div>' +
    '</div>' +
    '<div class="cue-card-action">' +
      '<a href="' + prog.action + '" target="_blank" class="btn btn-primary">' + buttonLabel + '</a>' +
    '</div>' +
  '</div>';
resultsContainer.innerHTML += cardHtml;
});
}

function formatPhone(phoneStr) {
  if (phoneStr.length === 11) {
    if (phoneStr.startsWith('1')) {
      return '1-' + phoneStr.slice(1, 4) + '-' + phoneStr.slice(4, 7) + '-' + phoneStr.slice(7);
    } else {
      return phoneStr;
    }
  } else {
    return phoneStr;
  }
}