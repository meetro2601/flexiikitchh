
import iconSteps from "../images/Services/icon-steps.png";
import iconPeace from "../images/Services/icon-peace.png";
import iconEquipService from "../images/icon-equipmentservice.png";
import iconValue from "../images/Services/icon-value.png";
import iconRepair from "../images/Services/icon-repair.png";
import iconWebform from "../images/Services/icon-webform.png";
import iconJob from "../images/Services/icon-job.png";
import iconTechnician from "../images/Services/icon-technician.png";


export const serviceGuaranteeAccord = [
    {
        id: 1,
        question: "What type of equipment is covered by Flexikitch Service?",
        answers: [
            "All Flexikitch Rentals valued above $1000 are provided with extended manufacturer’s warranty and break down service cover.",
        ],
    },
    {
        id: 2,
        question: "How long is my equipment covered by Flexikitch Service?",
        answers: [
            "We provide all Flexikitch Rentals with ongoing break down service cover for the lifetime of rental.",
            "We will organize and pay for a technician to fix the equipment when it breaks down, for the duration of rental.",
        ],
    },
    {
        id: 3,
        question: "How do I book a service request?",
        answers: ["Fill up the service request form here."],
    },
    {
        id: 4,
        question: "What isn’t covered on Flexikitch breakdown service policy?",
        answers: [
            "Installation faults where Flexikitch contractors were not the primary installer.",
            "Faults or breakdown due to user error where it is clear that the equipment has been used or operated incorrectly against manufacturer guidelines.",
            "Faults or breakdowns due to poor maintenance or lack of equipment cleaning.",
            "Consumable components that are not integral to the primary mechanical operation of the appliance (filters, handles, light globes, etc).",
        ],
    },
];

export const ServiceGuaranteeBenefits = [
    {
        id: 1,
        icon: iconSteps,
        benefit: "Straight forward process",
        descrip:
            "Book a job with our service team over the phone or via the website.",
    },
    {
        id: 2,
        icon: iconPeace,
        benefit: "Peace of mind",
        descrip: "Customers receive updates at each stage for peace of mind.",
    },
    {
        id: 3,
        icon: iconEquipService,
        benefit: "Full-Service cover",
        descrip:
            "Flexikitch will organize and pay for a technician to fix the equipment when it breaks down, for the duration of rental.",
    },
    {
        id: 4,
        icon: iconValue,
        benefit: "Added value of finance plus service",
        descrip:
            "We are the only equipment financier across the Hospitality Industry in Australia providing extended service cover on rental equipment.",
    },
];

export const serviceProcess = [
    {
        id: 1,
        icon: iconRepair,
        step: 'Repair required',
        detail: 'Sometimes, stuff happens!'
    },
    {
        id: 2,
        icon: iconWebform,
        step: 'Complete webform',
        detail: 'Or call our dedicated service team to book a job.'
    },
    {
        id: 3,
        icon: iconJob,
        step: 'Job confirmed',
        detail: 'We will send confirmation when case details are received.'
    },
    {
        id: 4,
        icon: iconTechnician,
        step: 'Technician dispatched',
        detail: 'A technician will be sent ASAP to ensure you get back to full service.'
    },
]