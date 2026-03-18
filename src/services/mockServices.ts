// src/services/mockServices.ts

const mockSharePointEvents = [
    { id: 1, title: 'SharePoint Conference 2026', date: '2026-04-20', location: 'New York', description: 'Annual SharePoint conference.' },
    { id: 2, title: 'SharePoint Workshop', date: '2026-05-15', location: 'Los Angeles', description: 'Hands-on workshop for SharePoint users.' }
];

const mockHubSpotAudiences = [
    { id: 'aud1', name: 'Marketing Professionals', description: 'Audience for marketing outreach campaigns.' },
    { id: 'aud2', name: 'Tech Enthusiasts', description: 'Audience interested in technology products.' }
];

const mockActiveCampaignTemplates = [
    { id: 'template1', name: 'Welcome Email', content: 'Welcome to our service!' },
    { id: 'template2', name: 'Promotional Email', content: 'Check out our latest offers!' }
];

const mockGoogleSheetsRegistrations = [
    { id: 'reg1', name: 'John Doe', email: 'john.doe@example.com', event: 'SharePoint Conference 2026' },
    { id: 'reg2', name: 'Jane Smith', email: 'jane.smith@example.com', event: 'SharePoint Workshop' }
];

export {
    mockSharePointEvents,
    mockHubSpotAudiences,
    mockActiveCampaignTemplates,
    mockGoogleSheetsRegistrations
};