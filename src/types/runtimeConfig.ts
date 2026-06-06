export interface RuntimeConfig {
  id: string;
  key: string; // Unique configuration key
  value: any; // Can be string, number, boolean, object, or array
  description?: string;
  category: 'system' | 'feature' | 'ui' | 'integration' | 'limits' | 'other';
  dataType: 'string' | 'number' | 'boolean' | 'object' | 'array';
  isEditable: boolean; // Whether this config can be changed via UI
  requiresRestart: boolean; // Whether changing this requires app restart
  createdAt: string; // ISO date string
  updatedAt?: string;
  createdBy: string; // Admin/user ID who created/last modified
  version: number; // For tracking changes
}

export interface ConfigUpdateInput {
  value: any;
  description?: string;
}