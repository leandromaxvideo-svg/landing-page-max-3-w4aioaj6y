import pb from '@/lib/pocketbase/client'

export interface LeadItem {
  id: string
  collectionId: string
  collectionName: string
  name: string
  email: string
  phone?: string
  message?: string
  status: 'novo' | 'em_atendimento' | 'convertido' | 'arquivado'
  created: string
  updated: string
}

export const createLead = async (data: {
  name: string
  email: string
  phone?: string
  message?: string
}) => {
  return pb.collection<LeadItem>('leads').create({
    ...data,
    status: 'novo',
  })
}

export const getLeads = async () => {
  return pb.collection<LeadItem>('leads').getFullList({ sort: '-created' })
}

export const updateLeadStatus = async (id: string, status: LeadItem['status']) => {
  return pb.collection<LeadItem>('leads').update(id, { status })
}

export const deleteLead = async (id: string) => {
  return pb.collection('leads').delete(id)
}
