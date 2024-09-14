// Main JavaScript file for AI for GME

document.addEventListener('DOMContentLoaded', () => {
    console.log('AI for GME application loaded');

    // Add event listeners for form submissions
    document.getElementById('case-form')?.addEventListener('submit', generateCase);
    document.getElementById('question-form')?.addEventListener('submit', generateQuestion);
    document.getElementById('curriculum-form')?.addEventListener('submit', developCurriculum);
    document.getElementById('search-form')?.addEventListener('submit', searchContent);

    // Add event listeners for quality improvement project
    document.getElementById('problem-definition')?.addEventListener('input', updateProjectSummary);
    document.getElementById('aim-statement')?.addEventListener('input', updateProjectSummary);
    document.getElementById('outcome-measure')?.addEventListener('input', updateProjectSummary);
    document.getElementById('process-measure')?.addEventListener('input', updateProjectSummary);
    document.getElementById('balancing-measure')?.addEventListener('input', updateProjectSummary);
    document.getElementById('stakeholder-engagement')?.addEventListener('input', updateProjectSummary);
    document.getElementById('understanding-system')?.addEventListener('input', updateProjectSummary);
    document.getElementById('selecting-interventions')?.addEventListener('input', updateProjectSummary);
    document.getElementById('pdsa-cycles')?.addEventListener('input', updateProjectSummary);
    document.getElementById('analyzing-data')?.addEventListener('input', updateProjectSummary);
    document.getElementById('problem-definition-grade')?.addEventListener('input', updateProjectSummary);
    document.getElementById('aim-statement-grade')?.addEventListener('input', updateProjectSummary);
    document.getElementById('outcome-measure-grade')?.addEventListener('input', updateProjectSummary);
    document.getElementById('process-measure-grade')?.addEventListener('input', updateProjectSummary);
    document.getElementById('balancing-measure-grade')?.addEventListener('input', updateProjectSummary);
    document.getElementById('stakeholder-engagement-grade')?.addEventListener('input', updateProjectSummary);
    document.getElementById('understanding-system-grade')?.addEventListener('input', updateProjectSummary);
    document.getElementById('selecting-interventions-grade')?.addEventListener('input', updateProjectSummary);
    document.getElementById('pdsa-cycles-grade')?.addEventListener('input', updateProjectSummary);
    document.getElementById('analyzing-data-grade')?.addEventListener('input', updateProjectSummary);
    document.getElementById('overall-rating-grade')?.addEventListener('input', updateProjectSummary);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to generate a case
    function generateCase(e) {
        e.preventDefault();
        const specialty = document.getElementById('case-specialty').value;
        const complexity = document.getElementById('case-complexity').value;
        
        if (!specialty || !complexity) {
            showError('case-result', 'Please fill in all fields for case generation.');
            return;
        }

        showLoading('case-result');
        
        // Simulate AI-generated case (with setTimeout to mimic API call)
        setTimeout(() => {
            const case_result = `Generated case for ${specialty} with complexity level ${complexity}:
            
            Patient presents with...
            [AI-generated case details would appear here]`;

            showResult('case-result', case_result);
        }, 1000);
    }

    // Function to generate a question
    function generateQuestion(e) {
        e.preventDefault();
        const topic = document.getElementById('question-topic').value;
        const type = document.getElementById('question-type').value;
        
        if (!topic || !type) {
            showError('question-result', 'Please fill in all fields for question generation.');
            return;
        }

        showLoading('question-result');
        
        // Simulate AI-generated question (with setTimeout to mimic API call)
        setTimeout(() => {
            const question_result = `Generated ${type} question on ${topic}:
            
            Question: [AI-generated question would appear here]
            
            Answer: [AI-generated answer would appear here]`;

            showResult('question-result', question_result);
        }, 1000);
    }

    // Function to develop a curriculum
    function developCurriculum(e) {
        e.preventDefault();
        const program = document.getElementById('curriculum-program').value;
        const duration = document.getElementById('curriculum-duration').value;
        
        if (!program || !duration) {
            showError('curriculum-result', 'Please fill in all fields for curriculum development.');
            return;
        }

        showLoading('curriculum-result');
        
        // Simulate AI-generated curriculum outline (with setTimeout to mimic API call)
        setTimeout(() => {
            const curriculum_result = `Generated curriculum outline for ${program} (${duration} weeks):
            
            Week 1-2: Introduction to ${program}
            Week 3-4: Core Concepts
            [AI-generated curriculum details would appear here]`;

            showResult('curriculum-result', curriculum_result);
        }, 1000);
    }

    // Function to search content
    function searchContent(e) {
        e.preventDefault();
        const query = document.getElementById('search-query').value;
        
        if (!query) {
            showError('search-results', 'Please enter a search query.');
            return;
        }

        showLoading('search-results');
        
        // Simulate search results (with setTimeout to mimic API call)
        setTimeout(() => {
            const search_results = `Search results for "${query}":
            
            1. Case: [Relevant case title]
            2. Question: [Relevant question]
            3. Curriculum: [Relevant curriculum section]`;

            showResult('search-results', search_results);
        }, 1000);
    }

    // Function to update project summary
    function updateProjectSummary() {
        const problemDefinition = document.getElementById('problem-definition').value;
        const aimStatement = document.getElementById('aim-statement').value;
        const outcomeMeasure = document.getElementById('outcome-measure').value;
        const processMeasure = document.getElementById('process-measure').value;
        const balancingMeasure = document.getElementById('balancing-measure').value;
        const stakeholderEngagement = document.getElementById('stakeholder-engagement').value;
        const understandingSystem = document.getElementById('understanding-system').value;
        const selectingInterventions = document.getElementById('selecting-interventions').value;
        const pdsaCycles = document.getElementById('pdsa-cycles').value;
        const analyzingData = document.getElementById('analyzing-data').value;
        
        const problemDefinitionGrade = document.getElementById('problem-definition-grade').value || 'Not graded';
        const aimStatementGrade = document.getElementById('aim-statement-grade').value || 'Not graded';
        const outcomeMeasureGrade = document.getElementById('outcome-measure-grade').value || 'Not graded';
        const processMeasureGrade = document.getElementById('process-measure-grade').value || 'Not graded';
        const balancingMeasureGrade = document.getElementById('balancing-measure-grade').value || 'Not graded';
        const engagementGrade = document.getElementById('stakeholder-engagement-grade').value || 'Not graded';
        const systemGrade = document.getElementById('understanding-system-grade').value || 'Not graded';
        const interventionsGrade = document.getElementById('selecting-interventions-grade').value || 'Not graded';
        const pdsaGrade = document.getElementById('pdsa-cycles-grade').value || 'Not graded';
        const analysisGrade = document.getElementById('analyzing-data-grade').value || 'Not graded';
        const overallRatingGrade = document.getElementById('overall-rating-grade').value || 'Not graded';

        const projectSummary = `
            <h3>Problem Definition</h3>
            <p>${problemDefinition || 'Not provided'}</p>
            <p>Grade: ${problemDefinitionGrade}</p>

            <h3>Aim Statement</h3>
            <p>${aimStatement || 'Not provided'}</p>
            <p>Grade: ${aimStatementGrade}</p>

            <h3>Outcome Measure</h3>
            <p>${outcomeMeasure || 'Not provided'}</p>
            <p>Grade: ${outcomeMeasureGrade}</p>

            <h3>Process Measure</h3>
            <p>${processMeasure || 'Not provided'}</p>
            <p>Grade: ${processMeasureGrade}</p>

            <h3>Balancing Measure</h3>
            <p>${balancingMeasure || 'Not provided'}</p>
            <p>Grade: ${balancingMeasureGrade}</p>

            <h3>Stakeholder Engagement</h3>
            <p>${stakeholderEngagement || 'Not provided'}</p>
            <p>Grade: ${engagementGrade}</p>

            <h3>Understanding the System</h3>
            <p>${understandingSystem || 'Not provided'}</p>
            <p>Grade: ${systemGrade}</p>

            <h3>Selecting and Testing Interventions</h3>
            <p>${selectingInterventions || 'Not provided'}</p>
            <p>Grade: ${interventionsGrade}</p>

            <h3>PDSA Cycles</h3>
            <p>${pdsaCycles || 'Not provided'}</p>
            <p>Grade: ${pdsaGrade}</p>

            <h3>Analyzing Data and Evaluating Results</h3>
            <p>${analyzingData || 'Not provided'}</p>
            <p>Grade: ${analysisGrade}</p>

            <h3>Overall Rating</h3>
            <p>Grade: ${overallRatingGrade}</p>
        `;

        document.getElementById('project-summary').innerHTML = projectSummary;
    }

    // Helper function to show loading state
    function showLoading(elementId) {
        document.getElementById(elementId).innerHTML = '<p>Loading...</p>';
    }

    // Helper function to show result
    function showResult(elementId, result) {
        document.getElementById(elementId).innerHTML = `<pre>${result}</pre>`;
    }

    // Helper function to show error
    function showError(elementId, message) {
        document.getElementById(elementId).innerHTML = `<p style="color: red;">${message}</p>`;
    }

    // Simulate saved content
    const savedContent = [
        'Case: Acute Appendicitis',
        'Question: Diagnosing Pneumonia',
        'Curriculum: Cardiology Rotation'
    ];

    const savedContentList = document.getElementById('saved-content');
    if (savedContentList) {
        savedContent.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            savedContentList.appendChild(li);
        });
    }

    // Initialize project summary
    updateProjectSummary();
});