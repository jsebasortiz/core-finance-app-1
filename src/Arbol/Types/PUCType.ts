export interface AuxiliaryAccount {
  id: number;
  code: string;
  name: string;
  subAccountingAccountId: number; 
  status?: string;
  level: number; 
  children?: AuxiliaryAccount[];
}

export interface TreeNode {
  id: number; 
  code: string;
  name: string;
  subAccountingAccountId?: number;  
  accountingAccountClassId?: number;  
  accountingAccountGroupId?: number;  
  accountingAccountId?: number;       
  status?: string;
  level: number; 
  children?: TreeNode[];
}
