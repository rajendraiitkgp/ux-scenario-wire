export type Perspective = 'concept'|'user-scenario'|'structures'|'interaction-policy'|'ux-design-scope'|'open-decisions';
export type Stage={id:string;title:string;type:string;purpose:string;actions:string[];imageUrl?:string};
export type Scenario={id:string;title:string;description:string;goal:string;success:string;icon?:string;stages:Stage[]};
export type Analysis={id:string;name:string;createdAt:string;updatedAt:string;status:string;prd:string;perspectives:Perspective[];summary:string;openDecisions:number;scenarios:Scenario[];sections:Record<string,string>;html:string;};
