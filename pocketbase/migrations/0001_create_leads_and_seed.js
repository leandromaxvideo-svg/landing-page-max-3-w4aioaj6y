migrate(
  (app) => {
    try {
      app.findCollectionByNameOrId('leads')
    } catch (_) {
      const collection = new Collection({
        name: 'leads',
        type: 'base',
        listRule: '',
        viewRule: '',
        createRule: '',
        updateRule: "@request.auth.id != ''",
        deleteRule: "@request.auth.id != ''",
        fields: [
          { name: 'name', type: 'text', required: true },
          { name: 'email', type: 'email', required: true },
          { name: 'phone', type: 'text' },
          { name: 'message', type: 'text' },
          {
            name: 'status',
            type: 'select',
            required: true,
            values: ['novo', 'em_atendimento', 'convertido', 'arquivado'],
            maxSelect: 1,
          },
          { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
          { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
        ],
        indexes: [
          'CREATE INDEX idx_leads_created ON leads (created)',
          'CREATE INDEX idx_leads_status ON leads (status)',
        ],
      })
      app.save(collection)
    }

    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'leandromaxvideo@gmail.com')
    } catch (_) {
      const users = app.findCollectionByNameOrId('_pb_users_auth_')
      const record = new Record(users)
      record.setEmail('leandromaxvideo@gmail.com')
      record.setPassword('Skip@Pass')
      record.setVerified(true)
      record.set('name', 'Max 3 Admin')
      app.save(record)
    }
  },
  (app) => {
    try {
      const collection = app.findCollectionByNameOrId('leads')
      app.delete(collection)
    } catch (_) {}
  },
)
