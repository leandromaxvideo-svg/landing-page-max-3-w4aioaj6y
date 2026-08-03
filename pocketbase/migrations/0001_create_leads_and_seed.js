migrate(
  (app) => {
    const leads = new Collection({
      name: 'leads',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
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
          values: ['novo', 'em_atendimento', 'convertido', 'arquivado'],
          maxSelect: 1,
        },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: [
        'CREATE INDEX idx_leads_created ON leads (created DESC)',
        'CREATE INDEX idx_leads_status ON leads (status)',
      ],
    })
    app.save(leads)

    const sampleLeads = [
      {
        name: 'Carlos Eduardo Silva',
        email: 'carlos.silva@techcorp.com.br',
        phone: '(11) 98765-4321',
        message:
          'Gostaria de estruturar o pipeline de vendas do nosso time B2B e implementar automações no WhatsApp.',
        status: 'novo',
      },
      {
        name: 'Mariana Oliveira',
        email: 'mariana@consultoriagrowth.com',
        phone: '(21) 99887-1122',
        message:
          'Precisamos de um dashboard em tempo real para monitorar KPIs comerciais das nossas 4 filiais.',
        status: 'em_atendimento',
      },
      {
        name: 'Roberto Mendes',
        email: 'roberto@mendeslogistica.com.br',
        phone: '(31) 97123-8899',
        message: 'Quero agendar uma demonstração do sistema de automação e integração de leads.',
        status: 'convertido',
      },
    ]

    for (const item of sampleLeads) {
      try {
        const record = new Record(leads)
        record.set('name', item.name)
        record.set('email', item.email)
        record.set('phone', item.phone)
        record.set('message', item.message)
        record.set('status', item.status)
        app.save(record)
      } catch (_) {}
    }

    const users = app.findCollectionByNameOrId('_pb_users_auth_')
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'leandromaxvideo@gmail.com')
    } catch (_) {
      const record = new Record(users)
      record.setEmail('leandromaxvideo@gmail.com')
      record.setPassword('Skip@Pass')
      record.setVerified(true)
      record.set('name', 'Admin Max 3')
      app.save(record)
    }
  },
  (app) => {
    try {
      const leads = app.findCollectionByNameOrId('leads')
      app.delete(leads)
    } catch (_) {}
  },
)
